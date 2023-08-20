import { configureStore } from '@reduxjs/toolkit';
import cardGroupReducer from '../reducers/cardGroupReducer';
import cardDetailReducer from '../reducers/cardDetailReducer';
import popularRecipes from '../reducers/popularRecipes';

const store = configureStore({
  reducer: {
    cardGroup: cardGroupReducer,
    cardDetail: cardDetailReducer,
    popularRecipes:popularRecipes,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // Export the AppDispatch type
export default store;
