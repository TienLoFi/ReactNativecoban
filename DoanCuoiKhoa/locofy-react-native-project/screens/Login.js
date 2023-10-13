import * as React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Login = ({ navigation }) => {
  const onPressRegister = () => {
    navigation.navigate("Register");
  };
  const onPressHomeMain = () => {
    navigation.navigate("Home");
  };
  return (
    <LinearGradient
      style={styles.login}
      locations={[0, 1]}
      colors={["#fff", "#f2f0f0"]}
    >
      <View style={styles.rectangleParent}>
      <TouchableHighlight onPress={onPressHomeMain}>

        <LinearGradient
          style={[styles.frameChild, styles.login1Layout]}
          locations={[0, 1]}
          colors={["#f5ca48", "#ffaf18"]}
        />
                </TouchableHighlight>

          <Text style={[styles.login1, styles.loginTypo1]}>Login</Text>
      </View>
      <View style={styles.loginInner}>
        <View style={styles.frameWrapper}>
          <View style={styles.frameItem} />
        </View>
      </View>
      <Text style={[styles.login2, styles.loginTypo]}>Login</Text>
      <Text style={[styles.forgetPassword, styles.passwordTypo1]}>
        Forget password
      </Text>
      <View style={styles.rememberPasswordParent}>
        <Text style={[styles.rememberPassword, styles.passwordTypo1]}>
          Remember password
        </Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/icons/rectangle-7.png")}
        />
      </View>
      <Image
        style={styles.loginChild}
        contentFit="cover"
        source={require("../assets/images/rectangle-10.png")}
      />
      <Image
        style={styles.loginItem}
        contentFit="cover"
        source={require("../assets/icons/fingerprint_2.png")}
      />
    
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.frameInner, styles.frameInnerShadowBox]} />
        <Text style={[styles.emailAddress, styles.passwordTypo]}>
          Email Address
        </Text>
        <Image
          style={[styles.mailIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icons/mail.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.frameInnerShadowBox]} />
        <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
        <Image
          style={[styles.lockIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icons/lock.png")}
        />
      </View>
      <Image
        style={styles.authIcon}
        contentFit="cover"
        source={require("../assets/icons/auth.png")}
      />
      <View style={[styles.orConnectWithWrapper, styles.connectLayout]}>
        <Text style={[styles.orConnectWith, styles.connectLayout]}>
          or connect with
        </Text>
      </View>
      <Image
        style={styles.sport11983141Icon}
        contentFit="cover"
        source={require("../assets/images/sport-1198314-1.png")}
      />
      <View style={[styles.noAccountRegisterHereWrapper, styles.accountLayout]}>
        <Text style={[styles.noAccountContainer, styles.accountLayout]}>
          <Text style={styles.noAccount}>
            <Text style={styles.noAccount1}>No account ? </Text>
          </Text>
          <Text style={[styles.registerHere, styles.passwordTypo2]}>
            <Text style={styles.noAccount}></Text>
            <TouchableHighlight onPress={onPressRegister}>
              <Text style={styles.registerHere1}>Register here</Text>
            </TouchableHighlight>
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  login1Layout: {
    width: 230,
    left: 0,
  },
  loginTypo: {
    textAlign: "center",
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
    
  },
  loginTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
    left:94,
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
    textAlign: "left",
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
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
    top: 0,
    width: 310,
    height: 45,
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
    top: 413,
    left: 263,
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
  loginItem: {
    top: 475,
    left: 320,
    borderRadius: 14,
    width: 45,
    height: 50,
    position: "absolute",
  },
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
  authIcon: {
    top: 633,
    left: 77,
    width: 254,
    height: 86,
    position: "absolute",
  },
  orConnectWith: {
    fontFamily: FontFamily.codaRegular,
    color: "#747070",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
  },
  orConnectWithWrapper: {
    top: 610,
    height: 20,
    left: 149,
  },
  sport11983141Icon: {
    top: 123,
    left: 234,
    width: 123,
    height: 123,
    position: "absolute",
  },
  noAccount1: {
    fontFamily: FontFamily.trebuchetMS,
  },
  noAccount: {
    color: Color.colorDimgray_100,
  },
  registerHere1: {
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
    left: 110,
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
