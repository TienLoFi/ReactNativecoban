import React, { useState, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
import Icon from "react-native-vector-icons/FontAwesome";
import Background from "./background";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
const LoginScreen = () => {
  const [value, onChangeText] = React.useState("");
  const onPress = () => setCount(count + 1);
  const [fontsLoaded] = useFonts({
    "Nunito-Regular": require("../../assets/fonts//Nunito/Nunito-Regular.ttf"),
    "Nunito-Bold": require("../../assets/fonts//Nunito/Nunito-Bold.ttf"),
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
    <View style={styles.container}>
      <Image
        source={require("../../assets/screen/homepage/Rectangle1.png")}
        style={styles.Img1}
      />
      <Image
        source={require("../../assets/screen/homepage/Rectangle2.png")}
        style={styles.Img1}
      />
      <Image
        source={require("../../assets/screen/homepage/Rectangle3.png")}
        style={styles.Img3}
      />

      <View style={styles.containerTop}>
        <View style={styles.topLogin}>
          <Text style={styles.toptext}>Login</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.emailText}>Email</Text>
          <View style={styles.TableEmail}>
            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={40}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              style={{ padding: 10 }}
            />
          </View>
          <Text style={styles.passText}>PassWord</Text>
          <View style={styles.TablePassword}>
            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={40}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              style={{ padding: 10 }}
            />
          </View>
          <View style={styles.CenterTable3}>
            <View style={[styles.iconTextContainer, { marginLeft: 5 }]}>
              <Icon name="check-square" size={20} color="gray" />
              <Text style={[styles.ShowPass, { opacity: 1 }]}>
                Hiện Mật Khẩu
              </Text>
              <View style={styles.forgotPass1}>
                <Text style={[styles.forgotPass, { opacity: 1 }]}>
                  Forgot Password?
                </Text>
              </View>
            </View>
            <View style={styles.Image}>
              <Image
                source={require("../../assets/facebook.jpg")} // Đường dẫn đến hình ảnh
                style={styles.Image}
              />
              <Image
                source={require("../../assets/google.png")} // Đường dẫn đến hình ảnh
                style={styles.Image}
              />
              <Image
                source={require("../../assets/apple.png")} // Đường dẫn đến hình ảnh
                style={styles.Image}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.containerBottom}>
        <View style={styles.register}>
          <Text style={styles.bottomText3}>
            <Text
              style={{
                fontFamily: "Nunito-Regular",
                color: "#fff",
                opacity: 0.3,
              }}
            >
              New Here?
            </Text>
            <Text style={{ fontFamily: "Nunito-Bold", color: "#fff" }}>
              Register
            </Text>
          </Text>
        </View>

        <View style={styles.btnlogin}>
          <View style={styles.bottom1}>
            <TouchableHighlight onPress={onPress}>
              <Text style={styles.bottomText1}>Login</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Đảm bảo thành phần sử dụng toàn bộ không gian màn hình
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "center", // Căn giữa theo chiều ngang
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
  Backgroundimage: {
    flex: 1,
    resizeMode: "cover", // Đặt kiểu căn chỉnh của hình nền (cover, contain, stretch, etc.)
    position: "absolute", // Đảm bảo hình nền nằm phía sau các thành phần khác
    width: "100%",
    height: "100%",
  },
  //--------------------TOP-------------  -------------------------------
  containerTop: {
    flex: 2,
    marginTop: 250,
  },
  topLogin: {
    marginTop: 120,
    paddingBottom: 40,
  },

  toptext: {
    fontSize: 35,
    color: "#2F80ED",
    fontWeight: "500",
    fontFamily: "Nunito-Bold",
  },
  form: {
    marginRight: 40,
  },

  TableEmail: {
    width: 309,
    height: 40,
    justifyContent: "center",
    borderRadius: 10,
    paddingRight: 180,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#2F80ED",
  },
  TablePassword: {
    width: 309,
    height: 40,
    borderWidth: 1,
    borderColor: "#2F80ED",
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingRight: 150,
    borderRadius: 10,
    alignItems: "center", // Sửa đổi từ "flex-start" thành "center"
  },
  CenterTable3: {
    paddingRight: 10,
    marginTop: 15,
  },

  emailText: {
    fontSize: 18,
    color: "#2F80ED",
    fontFamily: "Nunito-Regular",
  },
  passText: {
    fontSize: 18,
    color: "#2F80ED",
    marginTop: 20,
    fontFamily: "Nunito-Regular",
  },
  ShowPass: {
    marginLeft: 10,
    color: "#2F80ED",
    fontFamily: "Nunito-Regular",
  },
  forgotPass: {
    color: "#2F80ED",
    marginLeft: 80,

    fontWeight: "500",
    textDecorationLine: "underline",
    fontFamily: "Nunito-Bold",
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  //---------------BOTTOM-------------------------------------------------
  containerBottom: {
    flex: 0.5,
    marginTop: 100,
    flexDirection: "row",
  },
  bottom1: {
    borderWidth: 1,
    borderColor: "white",
    position: "relative",
    borderRadius: 5,
    width: 144,
    height: 60,

    alignItems: "center",
    justifyContent: "center",
  },

  bottomText1: {
    fontSize: 22,
    color: "white",
    position: "relative",
    fontFamily: "Nunito-Regular",
  },

  register: {
    marginTop: 60,
    marginRight: 70,
  },
  Image: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginRight: 15,

    flexDirection: "row",
  },
});
export default LoginScreen;
