import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddQuestionScreen from '../screens/AddQuestionScreen';
import CreateQuizScreen from '../screens/CreateQuizScreen';
import PlayQuizScreen from '../screens/PlayQuizScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CreateQuizScreen" component={CreateQuizScreen} />
      <Stack.Screen name="AddQuestionScreen" component={AddQuestionScreen} />
      <Stack.Screen name="PlayQuizScreen" component={PlayQuizScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;