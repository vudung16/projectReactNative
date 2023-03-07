import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '@screens/Home/index';
import Login from '@screens/Login/Login';
import Register from '@screens/Register/Register';
import Notification from '@screens/Notification/Noti';
import Cart from '@screens/Cart/Cart';
import User from '@screens/User/Index';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen 
          name="DrawnHome" 
          component={Home} 
          options={{
            title: "Trang chủ",
          }}
        />
        <Drawer.Screen 
          name="DrawnLogin" 
          component={Cart} 
          options={{
            title: "Test1",
          }}
        />
        <Drawer.Screen
          name="DrawnRegister" 
          component={User} 
          options={{
            title: "Test2",
          }}
        />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;