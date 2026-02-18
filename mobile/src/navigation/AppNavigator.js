import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* Login Screen - Header hidden for clean look */}
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
      />
      
      {/* Register Screen */}
      <Stack.Screen 
        name="Register" 
        component={RegisterScreen} 
        options={{ title: 'Create Account' }} 
      />
      
      {/* Home Screen */}
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          title: 'MicroMarket',
          headerLeft: null // Login ke baad piche jane ka option hatane ke liye
        }} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;