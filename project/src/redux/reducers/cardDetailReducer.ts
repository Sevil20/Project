import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store/store';


interface RecipeDetail {
    id: number;
    title: string;
    image: string;
    summary: string;
    instructions: string;
    servings: number;
    preparationMinutes: number;
    cookingMinutes: number;
    cuisines: string[];
    diets: string[];
    extendedIngredients: {
      aisle: string;
      amount: number;
      consistency: string;
      id: number;
      image: string;
      measures: {
        metric: {
          amount: number;
          unitLong: string;
          unitShort: string;
        };
      };
      name: string;
      original: string;
      unit: string;
    }[];
  }
  

interface CardDetailState {
  data: RecipeDetail | null; 
  loading: boolean;
  error: string | null;
}

const initialState: CardDetailState = {
  data: null,
  loading: false,
  error: null,
};


export const fetchCardDetailData = createAsyncThunk(
  'cardDetail/fetchData',
  async (id: number) => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
        params: {
          apiKey: 'f3c1681a631a4b529b4364683e3a3750',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error((error as any).response?.data?.message || 'An error occurred');
    }
  }
);

const cardDetailSlice = createSlice({
  name: 'cardDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardDetailData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCardDetailData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCardDetailData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default cardDetailSlice.reducer;


export const selectCardDetailData = (state: RootState) => state.cardDetail.data;
export const selectCardDetailLoading = (state: RootState) => state.cardDetail.loading;
export const selectCardDetailError = (state: RootState) => state.cardDetail.error;
