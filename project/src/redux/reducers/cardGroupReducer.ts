import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store/store";

interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

interface CardGroupState {
  search: string;
  searchQuery: string;
  recipeList: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
}

const initialState: CardGroupState = {
  search: "",
  searchQuery: "",
  recipeList: [],
  offset: 0,
  number: 0,
  totalResults: 0,
  loading: false,
  error: null,
  currentPage:1,
  totalPages:1
};

export const fetchCardGroupData = createAsyncThunk(
  "cardGroup/fetchData",
  async (currentPage: number) => {
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch?&apiKey=0e5c8a02ac484d40ad10bbf5c1364f3f",
        {
          params: {
            offset: (currentPage - 1) * 10, // Adjust the offset based on page number
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(
        (error as any).response?.data?.message || "An error occurred"
      );
    }
  }
);

export const fetchSearchCard = createAsyncThunk(
  "searchCard/fetchSearch",
  async (searchQuery: string) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=0e5c8a02ac484d40ad10bbf5c1364f3f&query=${searchQuery}`,
        {}
      );
      return response.data;
    } catch (error) {
      throw new Error(
        (error as any).response?.data?.message || "An error occurred"
      );
    }
  }
);

type obj = {
  searchQuery: string;
  currentPage: number;
  totalPages:number
};

export const fetchFilterCard = createAsyncThunk(
  "filterCard/fetchFilter",
  async ({ searchQuery, currentPage }: obj) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=0e5c8a02ac484d40ad10bbf5c1364f3f&query=${searchQuery}`,
        {
          params: {
            offset: (currentPage - 1) * 10, // Adjust the offset based on page number
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(
        (error as any).response?.data?.message || "An error occurred"
      );
    }
  }
);

const cardGroupSlice = createSlice({
  name: "cardGroup",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardGroupData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCardGroupData.fulfilled, (state, action) => {
        state.loading = false;
        const data = action.payload.results;
        state.recipeList = data ?? [];
        state.offset = action.payload.offset;
        state.totalResults = action.payload.totalResults;
        state.currentPage = (state.offset / 10) + 1;
        state.totalPages = Math.ceil(state.totalResults / 10);
      })
      .addCase(fetchCardGroupData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });

    builder
      .addCase(fetchSearchCard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchCard.fulfilled, (state, action) => {
        state.loading = false;
        const data = action.payload.results;
        state.recipeList = data ?? [];
        state.offset = action.payload.offset;
        state.totalResults = action.payload.totalResults;
        state.currentPage = (state.offset / 10) + 1;
        state.totalPages = Math.ceil(state.totalResults / 10);
      })
      .addCase(fetchSearchCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });

    builder
      .addCase(fetchFilterCard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilterCard.fulfilled, (state, action) => {
        state.loading = false;
        const data = action.payload.results;
        state.recipeList = data ?? [];
        state.offset = action.payload.offset;
        state.totalResults = action.payload.totalResults;
        state.currentPage = (state.offset / 10) + 1;
        state.totalPages = Math.ceil(state.totalResults / 10);
      })
      .addCase(fetchFilterCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});


export default cardGroupSlice.reducer;

export const selectCardGroupData = (state: RootState) =>
  state.cardGroup.recipeList;
export const selectCardGroupLoading = (state: RootState) =>
  state.cardGroup.loading;
export const selectCardGroupError = (state: RootState) => state.cardGroup.error;
export const { setSearchQuery } = cardGroupSlice.actions;
