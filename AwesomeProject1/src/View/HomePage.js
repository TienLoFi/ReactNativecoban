import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
import Background from "./background";

const HomePage = () => {
  const onPress = () => setCount(count + 1);
  const [fontsLoaded] = useFonts({
    "Nunito-Regular": require("../../assets/fonts//Nunito/Nunito-Regular.ttf"),
    "Nunito-Light": require("../../assets/fonts//Nunito/Nunito-Light.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <Background />
      <Image
        source={require("../../assets/screen/homepage/logo.png")}
        style={styles.Img4}
      />
      <View style={styles.Text} onLayout={onLayoutRootView}>
        <Text
          style={{
            fontFamily: "Nunito-Regular",
            fontSize: 36,
            color: "#2F80ED",
            opacity: 0.7,
          }}
        >
          Lorem
        </Text>
        <Text
          style={{
            fontFamily: "Nunito-Light",
            fontSize: 24,
            color: "#2F80ED",
            opacity: 0.7,
          }}
        >
          {" "}
          consequat duis
        </Text>
        <Text
          style={{
            fontFamily: "Nunito-Light",
            fontSize: 24,
            color: "#2F80ED",
            opacity: 0.7,
          }}
        >
          {" "}
          enim velit
        </Text>
      </View>

      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttontext}>Get Started</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Img1: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  Img3: {
    position: "absolute",
    top: 680,
    left: 0,
  },
  Img4: {
    position: "absolute",
    top: 400,
    left: 50,
    width: 70,
    height: 80,
  },
  Text: {
    flexDirection: "column",
    top: 500,
    left: 50,
    width: 192,
    height: 109,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#2F80ED",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 120,
    top: 650,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#fff",
    left: 100,
    width: 144,
    height: 60,
    justifyContent: "center",
  },
  buttontext: {
    fontSize: 22,
    color: "#fff",
    fontFamily: "Nunito-Regular",
  },
});
export default HomePage;
