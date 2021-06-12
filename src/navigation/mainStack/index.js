import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import router from '../router';
const Tab = createBottomTabNavigator();
import HomeDetailStack from './HomeDetailStack';
import SettingDetailStack from './SettingDetailStack';

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={router.homeDetailStack} component={HomeDetailStack} />
      <Tab.Screen
        name={router.settingDetailStack}
        component={SettingDetailStack}
      />
    </Tab.Navigator>
  );
}
