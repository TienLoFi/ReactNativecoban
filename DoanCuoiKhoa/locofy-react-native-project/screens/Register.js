import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Easing,
  TouchableOpacity,
  Animated,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";

const Register = ({ navigation }) => {
  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;

  const { width, height } = Dimensions.get("window"); // Lấy chiều rộng màn hình
  const buttonSize = width * 0.06; // Đặt kích thước dựa trên chiều rộng màn hình
  const buttonMargin = width * 0.03; // Đặt khoảng cách dựa trên chiều rộng màn hình
  const buttonTop = height * 0.05; // Đặt top dựa trên chiều cao màn hình
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

      <Animated.View
        style={[
          styles.register,
          styles.registerShadowBox,
          { height: screenHeight, width: screenWidth },
        ]}
        locations={[0, 1]}
        colors={["#fff", "#f2f0f0"]}
      >
        <View style={[styles.orConnectWithWrapper, styles.connectLayout]}>
          <Text style={[styles.orConnectWith, styles.orConnectWithTypo]}>
            or connect with
          </Text>
        </View>
        <View style={[styles.registerInner, styles.frameChildLayout]}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <LinearGradient
              style={[styles.frameChild, styles.frameChildLayout]}
              locations={[0, 1]}
              colors={["#f5ca48", "#ffaf18"]}
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.register1, styles.registerTypo]}>Register</Text>
        <View style={styles.registerChild}>
          <View style={styles.frameWrapper}>
            <View style={styles.frameItem} />
          </View>
        </View>
        <Animatable.View
        animation="fadeIn"
        duration={1500}
        delay={400 * 2 + 3 * 100}
      >
        <Text style={[styles.register2, styles.registerTypo]}>{`Register
`}</Text>
</Animatable.View>
        <View
          style={[
            styles.alreadyRegisteredLoginHerWrapper,
            styles.alreadyLayout,
          ]}
        >
          <Text
            style={[styles.alreadyRegisteredContainer, styles.alreadyLayout]}
          >
            <Text
              style={styles.loginWitTouchClr}
            >{`Already registered ? `}</Text>
          </Text>

          <Text
            style={[
              styles.alreadyRegisteredLoginHerWrapper1,
              styles.alreadyLayout,
            ]}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.registerHere1}>Login here</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <Image
          style={styles.registerItem}
          contentFit="cover"
          source={require("../assets/images/rectangle-10.png")}
        />

        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={styles.frameInner} />
          <Text style={[styles.emailAddress, styles.userNameTypo]}>
            Email Address
          </Text>
          <Image
            style={[styles.mailIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icons/mail.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={styles.frameChild1ShadowBox} />
          <Text style={[styles.userName, styles.userNameTypo]}>User Name</Text>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/icons/group-18.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={styles.frameChild1ShadowBox} />
          <Text style={[styles.userName, styles.userNameTypo]}>Password</Text>
          <Image
            style={[styles.lockIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icons/lock.png")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginHorizontal: 12,
            alignItems: "center",
            alignContent: "center",
            alignContent: "center",
            width: width, // Sử dụng chiều rộng của màn hình
          }}
        >
          <TouchableOpacity style={styles.icon}>
            <Image
              source={require("../assets/icons/google.png")}
              style={styles.image1}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image
              source={require("../assets/icons/apple.png")}
              style={styles.image1}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image
              source={require("../assets/icons/facebook.png")}
              style={styles.image1}
            />
          </TouchableOpacity>
        </View>
        <Animatable.View
        animation="fadeIn"
        duration={800}
        delay={400 * 2 + 3 * 100}
      >
        <Image
          style={styles.sport11983142Icon}
          contentFit="cover"
          source={require("../assets/images/sport-1198314-1.png")}
        />
        </Animatable.View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image1: {
    width: 40,
    height: 40,
    top: 630,
  },
  icon: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    marginHorizontal: 12,
  },
  registerShadowBox: {
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  connectLayout: {
    width: 104,
    position: "absolute",
  },
  orConnectWithTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,

    flexDirection: "row",
    justifyContent: "center",
  },
  frameChildLayout: {
    height: 45,
    position: "absolute",
  },
  registerTypo: {
    textAlign: "center",
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
  },
  alreadyLayout: {
    height: 21,
    width: 215,
    position: "absolute",
  },
  loginWitTouchClr: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.trebuchetMS,
  },
  rectangleLayout: {
    height: 47,
    width: 312,
    left: 55,
    position: "absolute",
  },
  userNameTypo: {
    color: Color.colorSilver,
    fontSize: FontSize.size_mini,
    top: 14,
    fontFamily: FontFamily.trebuchetMS,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  orConnectWith: {
    fontFamily: FontFamily.codaRegular,
    color: "#747070",
    left: 10,
    top: 0,
    width: 104,
  },
  orConnectWithWrapper: {
    top: 590,
    left: 156,
    height: 20,
  },
  frameChild: {
    borderRadius: 27,
    shadowColor: "rgba(110, 75, 10, 0.11)",
    shadowRadius: 18,
    elevation: 18,
    width: 311,
    left: 0,
    top: 0,
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    height: 45,
  },
  registerInner: {
    top: 484,
    width: 151,
    left: 55,
  },
  register1: {
    top: 498,
    fontSize: 16,
    color: Color.colorWhite,
    height: 36,
    width: 311,
    left: 55,
  },
  frameItem: {
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
  registerChild: {
    top: 194,
    left: 18,
    borderRadius: 130,
    width: 136,
    height: 34,
    position: "absolute",
  },
  registerHere1: {
    fontSize: FontSize.size_sm,
    color: "#ffa717",
  },
  register2: {
    top: 137,
    left: 15,
    fontSize: 55,
    color: "#ff591d",
    width: 241,
    height: 101,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  loginHere: {
    color: "#ffa717",
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
  },
  alreadyRegisteredContainer: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
  },
  alreadyRegisteredLoginHerWrapper: {
    top: 547,
    left: 100,
  },
  alreadyRegisteredLoginHerWrapper1: {
    top: 0,
    fontSize: FontSize.size_sm,
    left: 140,
    color: "#ffa717",

  },
  registerItem: {
    top: 1,
    left: 537,
    width: 414,
    height: 895,
    position: "absolute",
  },
  frameIcon: {
    top: 625,
    left: 171,
    borderRadius: 14,
    width: 60,
    height: 64,
    position: "absolute",
  },
  loginWitTouch: {
    top: 592,
    left: 155,
    width: 125,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  frameInner: {
    borderRadius: 49,
    shadowColor: "rgba(0, 0, 0, 0.21)",
    elevation: 21,
    shadowRadius: 21,
    backgroundColor: Color.colorWhite,
    height: 47,
    width: 312,
    left: 0,
    top: 0,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  emailAddress: {
    left: 37,
  },
  mailIcon: {
    top: 13,
    left: 276,
  },
  rectangleParent: {
    top: 333,
  },
  frameChild1ShadowBox: {
    borderRadius: 49,
    shadowColor: "rgba(0, 0, 0, 0.21)",
    elevation: 21,
    shadowRadius: 21,
    backgroundColor: Color.colorWhite,
    height: 47,
    width: 312,
    left: 0,
    top: 0,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  userName: {
    left: 38,
  },
  groupIcon: {
    top: 12,
    left: 272,
    width: 23,
    height: 22,
    position: "absolute",
  },
  rectangleGroup: {
    top: 257,
  },
  lockIcon: {
    top: 11,
    left: 275,
  },
  rectangleContainer: {
    top: 412,
  },
  authIcon: {
    top: 620,
    left: 85,
    width: 254,
    height: 86,
    position: "absolute",
  },
  sport11983142Icon: {
    top: 89,
    left: 270,
    width: 123,
    height: 123,
    position: "absolute",
  },
  register: {
    elevation: 23,
    bottom: 30,
    flex: 1,

    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

export default Register;
