import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home/index';
import Login from '@screens/Login/Login';
import Register from '@screens/Register/Register';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;