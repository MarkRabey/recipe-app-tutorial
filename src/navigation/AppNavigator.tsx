import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddRecipeScreen from '../screens/AddRecipeScreen';
import EditRecipeScreen from '../screens/EditRecipeScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import RecipeListScreen from '../screens/RecipeListScreen';

export type RootStackParamList = {
  RecipeList: undefined;
  RecipeDetail: {recipeId: string};
  AddRecipe: undefined;
  EditRecipe: {recipeId: string};
};

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RecipeList">
        <Stack.Screen
          name="RecipeList"
          component={RecipeListScreen}
          options={{title: 'Recipes'}}
        />
        <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
        <Stack.Screen
          name="AddRecipe"
          component={AddRecipeScreen}
          options={{title: 'Add Recipe'}}
        />
        <Stack.Screen
          name="EditRecipe"
          component={EditRecipeScreen}
          options={{title: 'Edit Recipe'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
