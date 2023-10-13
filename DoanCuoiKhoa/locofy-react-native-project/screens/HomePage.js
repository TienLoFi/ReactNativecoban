import * as React from "react";
import { StyleSheet, View, Text ,TouchableHighlight} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontFamily } from "../GlobalStyles";

const HomePage = ({ navigation }) => {
  const onPressLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <LinearGradient
      style={styles.homepage}
      locations={[0, 1]}
      colors={["#fff", "#f2f0f0"]}
    >
      <View style={styles.homepageChild} />
      <View style={styles.rectangleParent}>
        <LinearGradient
          style={styles.groupChild}
          locations={[0, 1]}
          colors={["#e89f16", "#ffaf18"]}
        />
        <TouchableHighlight onPress={onPressLogin}>
          <Text style={styles.getStarted}>Get Started</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.homepageInner}>
        <View style={styles.frameWrapper}>
          <View style={styles.frameChild} />
        </View>
      </View>
      <Text style={[styles.thGii, styles.thGiiTypo]}>{`GYM CLOTHES
`}</Text>
      <Image
        style={styles.homepageItem}
        contentFit="cover"
        source={require("../assets/images/rectangle-10.png")}
      />
      <Text style={[styles.choMngBn, styles.thGiiTypo]}>
        CHÀO MỪNG BẠN ĐÃ ĐẾN
      </Text>
      <Image
        style={styles.sport11983142Icon}
        contentFit="cover"
        source={require("../assets/images/sport-1198314-1.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  thGiiTypo: {
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
    left: 70,
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
