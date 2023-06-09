import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  Button as UILibButton,
  Text as UILibText,
  TextField as UILibTextField,
  View as UILibView,
} from 'react-native-ui-lib';
import {useDispatch, useSelector} from 'react-redux';
import {editRecipe} from '../features/recipeSlice';
import {RootStackParamList} from '../navigation/AppNavigator';
import {RootState} from '../store/rootReducer';

type EditRecipeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'EditRecipe'>;
  route: RouteProp<RootStackParamList, 'EditRecipe'>;
};

const EditRecipeScreen: React.FC<EditRecipeScreenProps> = ({
  navigation,
  route,
}) => {
  const {recipeId} = route.params;
  const recipes = useSelector((state: RootState) => state.recipe.recipes);
  const dispatch = useDispatch();

  const recipe = recipes.find(x => x.id === recipeId);
  const [title, setTitle] = useState(recipe?.title || '');
  const [instructions, setInstructions] = useState(recipe?.instructions || '');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setInstructions(recipe.instructions);
    }
  }, [recipe]);

  const handleEditRecipe = () => {
    if (recipe && title && instructions) {
      dispatch(
        editRecipe({
          id: recipe.id,
          title,
          instructions,
        }),
      );
      navigation.goBack();
    }
  };

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

  return (
    <UILibView flex padding-20>
      <UILibText h1>Edit Recipe</UILibText>
      <UILibTextField
        placeholder="Recipe Title"
        floatingPlaceholder
        floatOnFocus
        value={title}
        onChangeText={text => setTitle(text)}
        marginT-20
      />
      <UILibTextField
        placeholder="Recipe Instructions"
        floatingPlaceholder
        floatOnFocus
        value={instructions}
        onChangeText={text => setInstructions(text)}
        marginT-20
      />
      <UILibButton label="Save Changes" onPress={handleEditRecipe} marginT-20 />
      <UILibButton
        label="Cancel"
        onPress={() => navigation.goBack()}
        marginT-10
        link
      />
    </UILibView>
  );
};

export default EditRecipeScreen;
