import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";  

import HomeMainScreen from "./Home/HomeMainScreen";
import ChatScreen from "./Home/ChatScreen";
import NotificationsScreen from "./Home/NotificationsScreen";
import Bag from "./Home/Bag";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeMainScreen" // Đặt trang mặc định là "Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Message") {
            iconName = focused
              ? "chatbubble-ellipses"
              : "chatbubble-ellipses-outline";
          } else if (route.name === "Bag") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Notification") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeMainScreen}options={{
          headerShown: false, }}/>
      <Tab.Screen name="Message" component={ChatScreen} options={{
          headerShown: false, }}/>
      <Tab.Screen name="Bag" component={Bag} options={{
          headerShown: false, }}/>
      <Tab.Screen name="Notification" component={NotificationsScreen}  options={{
          headerShown: false, }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
          headerShown: false, }}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;
