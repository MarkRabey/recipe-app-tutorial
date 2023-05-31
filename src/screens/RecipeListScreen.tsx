import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../navigation/AppNavigator';

type RecipeListScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RecipeList'>;
};

const RecipeListScreen: React.FC<RecipeListScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Recipe List Screen</Text>
      <Button
        title="Add Recipe"
        onPress={() => navigation.navigate('AddRecipe')}
      />
    </View>
  );
};

export default RecipeListScreen;
