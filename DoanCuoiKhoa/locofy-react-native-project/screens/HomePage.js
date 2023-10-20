import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontFamily } from "../GlobalStyles";
import * as Animatable from "react-native-animatable";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      showGym: false,
      showClothes: false,
    };

    this.scaleValue = new Animated.Value(1);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showGym: true });
      setTimeout(() => {
        this.setState({ showClothes: true });
      }, 1000);
    }, 1000);

    this.animateButton();
  }

  animateButton = () => {
    Animated.timing(this.scaleValue, {
      toValue: 0.8,
      duration: 10,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(this.scaleValue, {
        toValue: 1,
        duration: 10,
        useNativeDriver: true,
      }).start();
    });
  };

  onPressLogin = () => {
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <LinearGradient
        style={styles.homepage}
        locations={[0, 1]}
        colors={["#fff", "#f2f0f0"]}
      >
        <View style={styles.homepageChild} />
        <TouchableWithoutFeedback onPress={this.animateButton}>
        <TouchableHighlight onPress={this.onPressLogin}>
          <Animated.View
            style={[
              styles.rectangleParent,
              {
                transform: [{ scale: this.scaleValue }],
              },
            ]}
          >
            <LinearGradient
              style={styles.groupChild}
              locations={[0, 1]}
              colors={["#e89f16", "#ffaf18"]}
            />

            
            <Text style={styles.getStarted}>Get Started</Text>
     
          </Animated.View>
          </TouchableHighlight>
        </TouchableWithoutFeedback>
        <View style={styles.homepageInner}>
          <View style={styles.frameWrapper}>
            <View style={styles.frameChild} />
          </View>
        </View>
        <View>
          <Animatable.View
            animation="fadeIn"
            duration={1000}
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {this.state.showGym && (
              <Animatable.Text
                style={[styles.thGii, styles.thGiiTypo]}
                animation="fadeIn"
                duration={1000}
                delay={0}
              >
                GYM
              </Animatable.Text>
            )}
            {this.state.showClothes && (
              <Animatable.Text
                style={[styles.thGii2, styles.thGiiTypo2]}
                animation="fadeIn"
                duration={1000}
                delay={1000}
              >
                CLOTHES
              </Animatable.Text>
            )}
          </Animatable.View>
        </View>
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
  }
}

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
    left: 90,
    fontSize: 36,
    color: "#ff591d",
    width: 272,
    height: 101,
    textAlign: "left",
  },
  thGii2: {
    top: 448,
    right: 100,
    fontSize: 36,
    color: "#ff591d",
    width: 272,
    height: 101,
    textAlign: "right",
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
