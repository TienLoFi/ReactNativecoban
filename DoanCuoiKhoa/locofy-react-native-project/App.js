import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Text } from "react-native";
import HomePage from "./screens/HomePage";
import Register from "./screens/Register";
import Home from "./screens/Home";
import Bag from "./screens/Bag";
import Profile from "./screens/Profile";
import PayAndOrder from "./screens/PayAndOrder";
import OrderCompleted from "./screens/OrderCompleted";
import Details from "./screens/Details";
//import Animation from "./screens/Animation";

import Login from "./screens/Login";

import { useFonts } from "expo-font";

const Stack = createStackNavigator();
export default function App() {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Quicksand-Medium": require("./assets/fonts/Quicksand/Quicksand-Medium.ttf"),
    "Quicksand-Bold": require("./assets/fonts/Quicksand/Quicksand-Bold.ttf"),
    "Quicksand-Regular": require("./assets/fonts/Quicksand/Quicksand-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Trebuchet-MS-Italic": require("./assets/fonts/Trebuchet/Trebuchet-MS-Italic.ttf"),
    "Coda-Regular": require("./assets/fonts/Coda/Coda-Regular.ttf"),

    "Montserrat-Regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <View style={styles.containeer}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{
              headerTransparent: true, // Làm cho thanh tiêu đề trong suốt

              headerShown: false, // Ẩn thanh tiêu đề
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTransparent: true, // Làm cho thanh tiêu đề trong suốt

              headerShown: true, // Ẩn thanh tiêu đề
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerTransparent: true, // Làm cho thanh tiêu đề trong suốt

              headerShown: true, // Ẩn thanh tiêu đề
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Bag"
            component={Bag}
            options={{
              headerTransparent: true, // Làm cho thanh tiêu đề trong suốt

              headerShown: false, // Ẩn thanh tiêu đề
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerTransparent: true, // Làm cho thanh tiêu đề trong suốt

              headerShown: true, // Ẩn thanh tiêu đề
            }}
          />
          <Stack.Screen
            name="PayAndOrder"
            component={PayAndOrder}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OrderCompleted"
            component={OrderCompleted}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Details"
            component={Details}
            options={{ headerShown: false }}
          />
              {/* <Stack.Screen
            name="Animation"
            component={Animation}
            options={{ headerShown: false }}
          /> */}
        </Stack.Navigator> 
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  containeer: {
    flex: 1,
  },
});
