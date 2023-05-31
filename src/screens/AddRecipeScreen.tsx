import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../navigation/AppNavigator';

type AddRecipeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AddRecipe'>;
};

const AddRecipeScreen: React.FC<AddRecipeScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Add Recipe Screem</Text>
      <Button
        title="Recipe List"
        onPress={() => navigation.navigate('RecipeList')}
      />
    </View>
  );
};

export default AddRecipeScreen;
