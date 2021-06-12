import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import router from './router';
const Stack = createStackNavigator();

import AuthStack from './authStack';
import MainStack from './mainStack';
import {useSelector} from 'react-redux';

export default function Navigation() {
  const token = useSelector(state => state.auth.token);
  console.log('tokenn ', token);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={router.authStack}
        screenOptions={{headerShown: false}}>
        {!token ? (
          <Stack.Screen
            name={router.authStack}
            component={AuthStack}></Stack.Screen>
        ) : (
          <Stack.Screen
            name={router.mainStack}
            component={MainStack}></Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
