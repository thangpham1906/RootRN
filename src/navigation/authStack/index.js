import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import router from '../router';
const Stack = createStackNavigator();
import LoginScreen from '../../screens/auth/LoginScreen';
import RegisterScreen from '../../screens/auth/RegisterScreen';
import ForgotPasswordScreen from '../../screens/auth/ForgotPasswordScreen';

export default AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={router.login} component={LoginScreen} />
      <Stack.Screen name={router.forgotPassword} component={RegisterScreen} />
      <Stack.Screen name={router.register} component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};
