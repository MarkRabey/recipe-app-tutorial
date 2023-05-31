import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  Button as UILibButton,
  Text as UILibText,
  View as UILibView,
} from 'react-native-ui-lib';
import {useDispatch, useSelector} from 'react-redux';
import {deleteRecipe} from '../features/recipeSlice';
import {RootStackParamList} from '../navigation/AppNavigator';
import {RootState} from '../store/rootReducer';

type RecipeDetailScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RecipeDetail'>;
  route: RouteProp<RootStackParamList, 'RecipeDetail'>;
};

const RecipeDetailScreen: React.FC<RecipeDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const {recipeId} = route.params;
  const recipes = useSelector((state: RootState) => state.recipe.recipes);
  const dispatch = useDispatch();
  const recipe = recipes.find(recipe => recipe.id === recipeId);

  if (!recipe) {
    return (
      <UILibView flex padding-20>
        <UILibText h1>Recipe not found</UILibText>
        <UILibButton
          label="Go Back"
          onPress={() => navigation.goBack()}
          marginT-20
        />
      </UILibView>
    );
  }

  const handleDeleteRecipe = () => {
    dispatch(deleteRecipe(recipe.id));
    navigation.goBack();
  };

  return (
    <UILibView flex padding-20>
      <UILibText text12>Recipe Detail Screen</UILibText>
      <UILibView marginT-20>
        <UILibText h3>{recipe.title}</UILibText>
        <UILibText>{recipe.instructions}</UILibText>
        <UILibButton
          label="Delete Recipe"
          onPress={handleDeleteRecipe}
          marginT-20
        />
      </UILibView>
      <UILibButton
        label="Go Back"
        onPress={() => navigation.goBack()}
        marginT-20
      />
    </UILibView>
  );
};

export default RecipeDetailScreen;
