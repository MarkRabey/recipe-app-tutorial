import {combineReducers} from 'redux';
import recipeReducer from '../features/recipeSlice';

const rootReducer = combineReducers({
  recipe: recipeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
