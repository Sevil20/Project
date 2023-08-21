import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store/store';

interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

interface CardGroupState {
  data: {
    searchQuery: string; // Arama sorgusu
    results: Recipe[];
    offset: number;
    number: number;
    totalResults: number;
  };
  loading: boolean;
  error: string | null;
}

const initialState: CardGroupState = {
  data: {
    searchQuery: '',
    results: [],
    offset: 0,
    number: 0,
    totalResults: 0,
  },
  loading: false,
  error: null,
};

export const fetchCardGroupData = createAsyncThunk(
  'cardGroup/fetchData',
  async (currentPage: number) => { // Pass currentPage parameter
    try {
      const response = await axios.get(
        'https://api.spoonacular.com/recipes/complexSearch?&apiKey=fa6914d24cbe497fbfc660d1fdea0c9a&number=40',
        {
          params: {
            apiKey: 'fa6914d24cbe497fbfc660d1fdea0c9a',
            offset: (currentPage - 1) * 5, // Adjust the offset based on page number
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(
        (error as any).response?.data?.message || 'An error occurred'
      );
    }
  }
);


const cardGroupSlice = createSlice({
  name: 'cardGroup',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.data.searchQuery = action.payload;
    },},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardGroupData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCardGroupData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCardGroupData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default cardGroupSlice.reducer;

export const selectCardGroupData = (state: RootState) => state.cardGroup.data;
export const selectCardGroupLoading = (state: RootState) => state.cardGroup.loading;
export const selectCardGroupError = (state: RootState) => state.cardGroup.error;
export const { setSearchQuery } = cardGroupSlice.actions;
