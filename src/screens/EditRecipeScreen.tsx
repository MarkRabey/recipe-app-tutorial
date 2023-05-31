import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../navigation/AppNavigator';

type EditRecipeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'EditRecipe'>;
};

const EditRecipeScreen: React.FC<EditRecipeScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Edit Recipe Screen</Text>
      <Button
        title="Recipe List"
        onPress={() => navigation.navigate('RecipeList')}
      />
    </View>
  );
};

export default EditRecipeScreen;
