import React from "react";
import { View, Button, Text } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";


import TabNavigator from "./TabNavigator";
import Profile from "./Profile";
import Settings from "./Home/Settings";

const Drawer = createDrawerNavigator();

function TabDrawer() {
  return (
    <Drawer.Navigator initialRouteName="TabNavigator">
      <Drawer.Screen
        name="Trang Chủ"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Tôi"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Cài Đặt"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

export default TabDrawer;
