import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import 'react-native-get-random-values';
import {
  Button as UILibButton,
  Text as UILibText,
  TextField as UILibTextField,
  View as UILibView,
} from 'react-native-ui-lib';
import {useDispatch} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import {addRecipe} from '../features/recipeSlice';
import {RootStackParamList} from '../navigation/AppNavigator';

type AddRecipeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AddRecipe'>;
};

const AddRecipeScreen: React.FC<AddRecipeScreenProps> = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');
  const dispatch = useDispatch();

  const handleAddRecipe = () => {
    if (title && instructions) {
      const newRecipe = {
        id: uuidv4(),
        title,
        instructions,
      };
      dispatch(addRecipe(newRecipe));
      navigation.goBack();
    }
  };

  return (
    <UILibView flex padding-20>
      <UILibText h1>Add Recipe</UILibText>
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
      <UILibButton label="Add Recipe" onPress={handleAddRecipe} marginT-20 />
      <UILibButton
        label="Cancel"
        onPress={() => navigation.goBack()}
        marginT-10
      />
    </UILibView>
  );
};

export default AddRecipeScreen;
