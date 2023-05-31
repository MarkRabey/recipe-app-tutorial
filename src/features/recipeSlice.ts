import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Recipe = {
  id: string;
  title: string;
  instructions: string;
};

type RecipeState = {
  recipes: Recipe[];
};

const initialState: RecipeState = {
  recipes: [
    {
      id: 'recipe-1',
      title: 'Example Recipe 1',
      instructions:
        'Non ex occaecat ex magna mollit voluptate esse non amet quis culpa enim.',
    },
    {
      id: 'recipe-2',
      title: 'Example Recipe 2',
      instructions: 'Nulla et aliqua ut veniam nostrud sint fugiat.',
    },
  ],
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<Recipe>) => {
      state.recipes.push(action.payload);
      AsyncStorage.setItem('recipes', JSON.stringify(state.recipes));
    },
    editRecipe: (state, action: PayloadAction<Recipe>) => {
      const {id} = action.payload;
      const index = state.recipes.findIndex(recipe => recipe.id === id);
      if (index !== -1) {
        state.recipes[index] = action.payload;
        AsyncStorage.setItem('recipes', JSON.stringify(state.recipes));
      }
    },
    deleteRecipe: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const index = state.recipes.findIndex(recipe => recipe.id === id);
      if (index !== -1) {
        state.recipes.splice(index, 1);
        AsyncStorage.setItem('recipes', JSON.stringify(state.recipes));
      }
    },
    loadRecipes: state => {
      AsyncStorage.getItem('recipes')
        .then(data => {
          const recipes = data ? JSON.parse(data) : [];
          state.recipes = recipes;
        })
        .catch(e => {
          console.log({e});

          state.recipes = [];
        });
    },
  },
});

export const {addRecipe, editRecipe, deleteRecipe, loadRecipes} =
  recipeSlice.actions;

export default recipeSlice.reducer;
