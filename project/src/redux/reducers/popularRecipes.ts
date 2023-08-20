import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store/store';

export interface RecipeInterface {
  id: number,
  title: string,
  readyInMinutes: number,
  servings: number,
  image: string,
  healthScore:number,
  sourceName:string
}

interface PopularRecipesState {
  data: {
    results: RecipeInterface[];
    offset: number;
    number: number;
    totalResults: number;
  };
  loading: boolean;
  error: string | null;
}


const initialState: PopularRecipesState = {
  data: {
    results: [],
    offset: 0,
    number: 0,
    totalResults: 0,
  },
  loading: false,
  error: null,
};

const fetchPopularRecipes = createAsyncThunk(
  'popularRecipes/fetchData',
  async (recipeId:number) => { // <-- Accept the recipe ID as an argument
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false`,
        {
          params: {
            apiKey: '0e5c8a02ac484d40ad10bbf5c1364f3f',
          },
        }
      );
      console.log('Fetched data:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw new Error(
        (error as any).response?.data?.message || 'An error occurred'
      );
    }
  }
);


export const popularRecipeReducer = createSlice({
  name: 'popularRecipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPopularRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default popularRecipeReducer.reducer;

export const selectPopularRecipesData = (state: RootState) => state.popularRecipes.data;
export const selectPopularRecipesLoading = (state: RootState) => state.popularRecipes.loading;
export const selectPopularRecipesError = (state: RootState) => state.popularRecipes.error;
