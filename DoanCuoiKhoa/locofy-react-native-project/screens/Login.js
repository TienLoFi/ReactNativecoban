import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Animated,
  Easing,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";

const Login = ({ navigation }) => {
  const { width, height } = Dimensions.get("window"); // Lấy chiều rộng màn hình

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
      <Animated.View style={[styles.signIn, { opacity: fadeAnim }]}>
        <View style={{ flexDirection: "row", alignItems: "center" }}></View>
        <Animatable.Text
          animation="zoomIn"
          delay={400 * 2 + 1 * 200}
          duration={2000}
          style={[styles.login2, styles.loginTypo]}
        >{`Login
`}</Animatable.Text>

        <Animatable.View
          animation="zoomIn"
          duration={1000}
          delay={400 * 2 + 3 * 200}
          style={styles.rectangleParent}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Overview")}>
            <LinearGradient
              style={[styles.frameChild, styles.login1Layout]}
              colors={["#E89F16", "#ffaf18"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={[styles.login1, styles.loginTypo1]}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animatable.View>
        <View style={styles.loginInner}>
          <View style={styles.frameWrapper}>
            <View style={styles.frameItem} />
          </View>
        </View>

        <TouchableOpacity>
          <Text style={[styles.forgetPassword, styles.passwordTypo1]}>
            Forget password
          </Text>
        </TouchableOpacity>
        <View style={styles.rememberPasswordParent}>
          <Text style={[styles.rememberPassword, styles.passwordTypo1]}>
            Remember password
          </Text>
          <TouchableOpacity>
            <Image
              style={styles.groupChild}
              contentFit="cover"
              source={require("../assets/icons/rectangle-7.png")}
            />
          </TouchableOpacity>
        </View>
        <Image
          style={styles.loginChild}
          contentFit="cover"
          source={require("../assets/images/rectangle-10.png")}
        />

        <Animatable.View
          animation="fadeIn"
          duration={1500}
          delay={400 * 2 + 3 * 200}
          style={[styles.rectangleGroup, styles.rectangleLayout]}
        >
          <View style={[styles.frameInner, styles.frameInnerShadowBox]} />
          <Text style={[styles.emailAddress, styles.passwordTypo]}>
            Email Address
          </Text>
          <Image
            style={[styles.mailIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icons/mail.png")}
          />
        </Animatable.View>

        <Animatable.View
          animation="fadeIn"
          duration={1500}
          delay={400 * 2 + 3 * 200}
          style={[styles.rectangleContainer, styles.rectangleLayout]}
        >
          <View style={[styles.rectangleView, styles.frameInnerShadowBox]} />
          <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
          <Image
            style={[styles.lockIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icons/lock.png")}
          />
        </Animatable.View>
        <Animatable.View
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
             <Animatable.View style={styles.icon}>
          <TouchableOpacity >
            <Animatable.View
              animation="fadeIn"
              delay={400 * 2 + 1 * 200}
              duration={1000}
              style={styles.google1Wrapper}
            >
              <Image
                source={require("../assets/icons/google.png")}
                style={styles.image1}
              />
              </Animatable.View>
        
          </TouchableOpacity>
          </Animatable.View>
          <TouchableOpacity >
          <Animatable.View
              animation="fadeIn"
              duration={3000}
              delay={400 * 2 + 3 * 200}
              style={styles.icon}
            >
            <Image
              source={require("../assets/icons/apple.png")}
              style={styles.image1}
            />
            </Animatable.View>
          </TouchableOpacity>
          <TouchableOpacity >
          <Animatable.View
              animation="fadeIn"
              duration={3000}
              delay={400 * 2 + 3 * 200}
              style={styles.icon}
            >
            <Image
              source={require("../assets/icons/facebook.png")}
              style={styles.image1}
            />
        
          </Animatable.View>
          </TouchableOpacity>
        </Animatable.View>
        <View style={[styles.orConnectWithWrapper, styles.connectLayout]}>
          <Text style={[styles.orConnectWith, styles.connectLayout]}>OR</Text>
        </View>
        <Animatable.View
          animation="zoomIn"
          duration={1500}
          delay={400 * 2 + 3 * 200}
        >
          <Image
            style={styles.sport11983141Icon}
            contentFit="cover"
            source={require("../assets/images/sport-1198314-1.png")}
          />
        </Animatable.View>

        <View
          style={[styles.noAccountRegisterHereWrapper, styles.accountLayout]}
        >
          <Text style={[styles.noAccountContainer, styles.accountLayout]}>
            <Text style={styles.noAccount}>
              <Text style={styles.noAccount1}>Don't Have An Account ? </Text>
            </Text>
          </Text>
        </View>
        <Text style={[styles.RegisterHere, styles.passwordTypo1]}>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.registerHere1}>Register here</Text>
          </TouchableOpacity>
        </Text>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  google1Wrapper:{
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    marginHorizontal: 12,
  },
  image1: {
    width: 40,
    height: 40,
    top: 630,
  },
  login1Layout: {
    width: 310,
    left: 0,
  },
  loginTypo: {
    textAlign: "center",
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
  },
  loginTypo1: {
    textAlign: "center",
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
  },
  passwordTypo1: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  rectangleLayout: {
    height: 47,
    width: 312,
    left: 53,
    position: "absolute",
  },
  frameInnerShadowBox: {
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
  passwordTypo: {
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
  connectLayout: {
    width: 104,
    position: "absolute",

    flexDirection: "row",
    justifyContent: "center",
  },
  accountLayout: {
    width: 215,
    height: 21,
    position: "absolute",
  },
  passwordTypo2: {
    fontWeight: "700",
    fontFamily: FontFamily.trebuchetMS,
  },
  frameChild: {
    borderRadius: 27,
    shadowColor: "rgba(110, 75, 10, 0.11)",
    shadowRadius: 18,
    elevation: 18,
    top: -20,
    width: 310,
    height: 50,
    position: "absolute",
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  login1: {
    fontSize: 16,
    color: Color.colorWhite,
    top: 13,
    width: 310,
    left: 0,
  },
  rectangleParent: {
    top: 477,
    left: 61,
    width: 151,
    height: 45,
    position: "absolute",
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
  loginInner: {
    top: 194,
    left: 18,
    borderRadius: 130,
    width: 136,
    height: 34,
    position: "absolute",
  },
  login2: {
    top: 169,
    left: 39,
    fontSize: 55,
    color: "#ff591d",
    width: 175,
    height: 69,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  forgetPassword: {
    top: 410,
    left: 263,
    color: "#ffa717",
    width: 109,
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
  },
  RegisterHere: {
    top: 533,
    left: 250,
    color: "#4d7ef9",
    width: 109,
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
  },
  rememberPassword: {
    top: 2,
    left: 35,
    width: 156,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild: {
    top: -1,
    left: -2,
    borderRadius: Border.br_11xs,
    width: 28,
    height: 25,
    position: "absolute",
  },
  rememberPasswordParent: {
    top: 408,
    width: 191,
    height: 21,
    left: 53,
    position: "absolute",
  },
  loginChild: {
    top: 1,
    left: 537,
    width: 414,
    height: 895,
    position: "absolute",
  },
  // loginItem: {
  //   top: 475,
  //   left: 320,
  //   borderRadius: 14,
  //   width: 45,
  //   height: 50,
  //   position: "absolute",
  // },
  loginWitTouch: {
    top: 568,
    width: 125,
    left: 149,
    color: "Color.colorDimgray_100",
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
  },
  frameInner: {
    borderRadius: 49,
    shadowColor: "rgba(0, 0, 0, 0.21)",
  },
  emailAddress: {
    left: 37,
  },
  mailIcon: {
    left: 276,
    top: 13,
  },
  rectangleGroup: {
    top: 270,
  },
  rectangleView: {
    borderRadius: 44,
    shadowColor: "rgba(0, 0, 0, 0.3)",
  },
  password: {
    left: 38,
  },
  lockIcon: {
    top: 11,
    left: 275,
  },
  rectangleContainer: {
    top: 339,
  },

  orConnectWith: {
    fontFamily: FontFamily.codaRegular,
    color: "#747070",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
    fontWeight: "bold",
  },
  orConnectWithWrapper: {
    top: 600,
    height: 20,
    left: 209,
  },
  sport11983141Icon: {
    top: 100,
    left: 234,
    width: 123,
    height: 123,
    position: "absolute",
  },
  noAccount1: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.trebuchetMS,
  },
  noAccount: {
    color: Color.colorDimgray_100,
  },
  registerHere1: {
    fontSize: FontSize.size_sm,
    color: "#ffa717",
  },
  registerHere: {
    fontFamily: FontFamily.trebuchetMS,
  },
  noAccountContainer: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
  },
  noAccountRegisterHereWrapper: {
    top: 534,
    left: 90,
  },
  login: {
    elevation: 23,
    bottom: 50,
    flex: 1,
    width: "100%",
    height: 896,
    backgroundColor: "transparent",
  },
});

export default Login;
