// redux/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriterecipes: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const recipe = action.payload;
      const exists = state.favoriterecipes.some(
        (item) => item.idFood === recipe.idFood
      );
      if (exists) {
        state.favoriterecipes = state.favoriterecipes.filter(
          (item) => item.idFood !== recipe.idFood
        );
      } else {
        state.favoriterecipes.push(recipe);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
