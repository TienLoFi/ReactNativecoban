import * as React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontFamily } from "../GlobalStyles";
import * as Animatable from "react-native-animatable";

const HomePage = ({ navigation }) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const fadeInBotton = {
    0: {
      opacity: 0,
      translateX: 100,
    },
    1: {
      opacity: 1,
      translateX: 0,
    },
  };
  useEffect(() => {
    const startAnimationTimeout = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }, 500);
    return () => clearTimeout(startAnimationTimeout);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <LinearGradient
        style={styles.homepage}
        locations={[0, 1]}
        colors={["#fff", "#f2f0f0"]}
      >
        <View style={styles.homepageChild} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
        <Animatable.View
        animation="zoomIn"
        duration={1000}
        delay={400 * 2 + 3 * 200}
        style={styles.rectangleParent}
      >
          <LinearGradient
            style={styles.groupChild}
            locations={[0, 1]}
            colors={["#e89f16", "#ffaf18"]}
          />

          <Text style={styles.getStarted}>Get Started</Text>
        </Animatable.View>
        </TouchableOpacity>
        <View style={styles.homepageInner}>
          <View style={styles.frameWrapper}>
            <View style={styles.frameChild} />
          </View>
        </View>
         <Animatable.View
        animation="zoomIn"
        duration={900}
        delay={400 * 2 + 3 * 200}
       
      >
          <Text style={[styles.thGii, styles.thGiiTypo]}> GYM CLOTHES</Text>
        </Animatable.View>
        <Animatable.View
        animation="zoomIn"
        duration={900}
        delay={400 * 2 + 3 * 200}
       
      >
        <Text style={[styles.choMngBn, styles.thGiiTypo]}>
          CHÀO MỪNG BẠN ĐÃ ĐẾN
        </Text>
        </Animatable.View>

        <Animatable.View
        animation="fadeIn"
        duration={1000}
        delay={400 * 2 + 3 * 200}
      
      >
        <Image
          style={styles.sport11983142Icon}
          contentFit="cover"
          source={require("../assets/images/sport-1198314-1.png")}
        />
        </Animatable.View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  thGiiTypo: {
    textShadowOffset: {
      width: 0,
      height: 4,
    },
flexDirection:"row",
justifyContent:"center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
  },
  thGiiTypo2: {
    textShadowOffset: {
      width: 0,
      height: 4,
    },

    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
  },
  homepageChild: {
    top: 484,
    left: 55,
    width: 151,
    height: 45,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: 27,
    shadowColor: "rgba(110, 75, 10, 0.11)",
    shadowRadius: 18,
    elevation: 18,
    height: 38,
    left: 0,
    width: 209,
    position: "absolute",
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  getStarted: {
    top: 8,
    fontSize: 18,
    color: "#fff",
    height: 50,
    textAlign: "center",
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    left: 0,
    width: 209,
    position: "absolute",
  },
  rectangleParent: {
    top: 611,
    left: 100,
    height: 55,
    width: 250,
    position: "absolute",
  },
  frameChild: {
    width: 64,
    height: 90,
  },
  frameWrapper: {
    top: -11,
    left: 33,
    width: 75,
    height: 42,
    flexDirection: "row",
    position: "absolute",
  },
  homepageInner: {
    top: 194,
    left: 18,
    borderRadius: 130,
    width: 136,
    height: 34,
    position: "absolute",
  },
  thGii: {
    top: 448,
  left:65,
    paddingHorizontal:20,
    fontSize: 36,
    color: "#ff591d",
    width: 272,
    height: 101,
    textAlign: "center",
  },

  homepageItem: {
    top: 1,
    left: 537,
    width: 420,
    height: 890,
    position: "relative",
  },
  choMngBn: {
    top: 413,
    left: 75,
    fontSize: 18,
    color: "#ffa717",
    textAlign: "center",
    width: 255,
  },
  sport11983142Icon: {
    top: 183,
    left: 90,
    width: 225,
    height: 225,
    position: "absolute",
  },
  homepage: {
    elevation: 23,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

export default HomePage;
