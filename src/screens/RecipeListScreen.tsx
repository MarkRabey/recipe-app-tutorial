import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
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
    <View>
      <Text>Recipe List Screen</Text>
      {recipes.map(recipe => (
        <View>
          <Text>{recipe.title}</Text>
          <Button
            title="View Details"
            onPress={() =>
              navigation.navigate('RecipeDetail', {recipeId: recipe.id})
            }
          />
        </View>
      ))}
      <Button
        title="Add Recipe"
        onPress={() => navigation.navigate('AddRecipe')}
      />
    </View>
  );
};

export default RecipeListScreen;
