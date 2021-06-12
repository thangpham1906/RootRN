import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import router from '../router';
const Stack = createStackNavigator();
import HomeScreen from '../../screens/main/homeTab';
import ListSongScreen from '../../screens/main//homeTab/ListSongScreen';
export default function HomeDetailStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={router.home} component={HomeScreen} />
      <Stack.Screen name={router.listSong} component={ListSongScreen} />
    </Stack.Navigator>
  );
}
