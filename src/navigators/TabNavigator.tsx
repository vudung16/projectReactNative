import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Notification from "@screens/Notification/Noti";
import User from "@screens/User/Index";
import HomeScreen from "@screens/Home/HomeScreen";
import Cart from "@screens/Cart/Cart";
import Favorite from "@screens/Favorite/Favorite";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Test2' screenOptions={({ route }) => ({
        headerShown: false,
      })}>
        <Tab.Screen 
            name="TabHome" 
            component={HomeScreen}
            options={{
                title: "Trang chủ",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home-outline" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen 
            name="TabCart" 
            component={Cart}
            options={{
                title: "Giỏ hàng",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="cart-outline" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen 
            name="TabNoti" 
            component={Notification}
            options={{
                title: "Thông báo",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="notifications-outline" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen 
            name="TabFavorite" 
            component={Favorite}
            options={{
                title: "Yêu thích",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="heart-outline" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen 
            name="TabUser" 
            component={User}
            options={{
                title: "Tôi",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person-outline" color={color} size={size} />
                ),
            }}
        />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;