import "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer"; 
import User from "../assets/user.jpg";

import Contact from "../screenss/Contact";



import TabNavigator from "./TabNavigator";
import Profile from "./Profile";
import Settings from "./Home/Settings";

const Drawer = createDrawerNavigator();

function TabDrawer() {
  return (
    <Drawer.Navigator
    drawerContent={
      (props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: '100%',
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: "#f4f4f4",
                borderBottomWidth: 1
              }}
            >
              <Image
                source={User}
                style={{
                  height: 130,
                  width: 130,
                  borderRadius: 65
                }}
              />
              <Text
                style={{
                  fontSize: 22,
                  marginVertical: 6,
                  fontWeight: "bold",
                  color: "#111"
                }}
              >User Account</Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#111"
                }}
              >Thành Viên Vàng</Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        )
      }
    }
    screenOptions={{
      drawerStyle: {
        backgroundColor: "#fff",
        width: 250
      },
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      drawerLabelStyle: {
        color: "#111"
      }
    }}
  >
    <Drawer.Screen
      name="Trang Chủ"
      options={{
        headerShown: false,
        drawerLabel: "Home",
        title: "Home",
        drawerIcon: () => (
          <SimpleLineIcons name="home" size={20} color="#808080" 
       />
        )
      }}
      component={TabNavigator}
    />
    <Drawer.Screen
      name="Tôi"
      options={{
        headerShown: false,
        drawerLabel: "Profile",
        title: "Profile",
        drawerIcon: () => (
          <MaterialIcons name="person" size={20} color="#808080" 
      />
        )
      }}
      component={Profile}
    />

    <Drawer.Screen
      name="Settings"
      options={{
        headerShown: false,
        drawerLabel: "Settings",
        title: "Settings",
        
        drawerIcon: () => (
          <SimpleLineIcons name="settings" size={20} color="#808080"
      />
        )
      }}
      component={Settings}
      
    />

    <Drawer.Screen
      name="Contact"
      options={{
        headerShown: false,
        drawerLabel: "Contact",
        title: "Contact",
        drawerIcon: () => (
          <MaterialCommunityIcons name="message-alert-outline" size={20} color="#808080" />
        )
      }}
      component={Contact}
    />
  </Drawer.Navigator>
  );
}

export default TabDrawer;
