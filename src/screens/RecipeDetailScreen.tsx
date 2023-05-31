import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../navigation/AppNavigator';

type RecipeDetailScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RecipeDetail'>;
};

const RecipeDetailScreen: React.FC<RecipeDetailScreenProps> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>Recipe Detail Screen</Text>
      <Button
        title="Add Recipe"
        onPress={() => navigation.navigate('AddRecipe')}
      />
    </View>
  );
};

export default RecipeDetailScreen;
