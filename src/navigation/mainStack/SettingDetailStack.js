import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import router from '../router';
const Stack = createStackNavigator();
import SettingScreen from '../../screens/main/settingTab';

export default function HomeDetailStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={router.settingDetailStack}
        component={SettingScreen}
      />
    </Stack.Navigator>
  );
}
