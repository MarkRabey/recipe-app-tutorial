import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
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
      <View>
        <Text>Recipe not found</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  const handleDeleteRecipe = () => {
    dispatch(deleteRecipe(recipe.id));
    navigation.goBack();
  };

  return (
    <View>
      <Text>Recipe Detail Screen</Text>
      <View style={{marginBottom: 10}}>
        <Text>{recipe.title}</Text>
        <Text>{recipe.instructions}</Text>
        <Button title="Delete Recipe" onPress={handleDeleteRecipe} />
      </View>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default RecipeDetailScreen;
