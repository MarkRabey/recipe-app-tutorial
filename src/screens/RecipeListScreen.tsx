import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {
  Button as UILibButton,
  Text as UILibText,
  View as UILibView,
} from 'react-native-ui-lib';
import {useDispatch, useSelector} from 'react-redux';
import {loadRecipes} from '../features/recipeSlice';
import {RootStackParamList} from '../navigation/AppNavigator';
import {RootState} from '../store/rootReducer';

type RecipeListScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RecipeList'>;
};

const RecipeListScreen: React.FC<RecipeListScreenProps> = ({navigation}) => {
  const recipes = useSelector((state: RootState) => state.recipe.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  return (
    <UILibView flex padding-20>
      <UILibText h1>Recipe List Screen</UILibText>
      {recipes.map(recipe => (
        <UILibView key={recipe.id} marginB-10>
          <UILibText h3>{recipe.title}</UILibText>
          <UILibButton
            label="View Details"
            onPress={() =>
              navigation.navigate('RecipeDetail', {recipeId: recipe.id})
            }
            marginT-10
          />
        </UILibView>
      ))}
      <UILibButton
        label="Add Recipe"
        onPress={() => navigation.navigate('AddRecipe')}
      />
    </UILibView>
  );
};

export default RecipeListScreen;
