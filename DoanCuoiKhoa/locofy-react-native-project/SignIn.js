import * as React from "react";
import { Text, StyleSheet, View, TextInput, TouchableHighlight, Keyboard } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SignIn = ({ navigation }) => {
  const [useremail, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignIn = () => {
    // Lấy giá trị từ TextInput và kiểm tra với dữ liệu từ API
    Keyboard.dismiss();
    
    fetch('http://192.168.1.9:8080/api/users')
      .then(response => response.json())
      .then(data => {
        
        const user = data.content.find(item => item.email === useremail);
      console.log(user)
        if (user) {
          if(user.password===password)
          {
            alert("Xin chào");
            navigation.navigate('Main');
          }else {
            alert('Mật khẩu không đúng.');
        }
      }else{
          alert("Email không đúng")
  }})
                .catch(error => {
        console.error('Lỗi cuộc gọi API:', error);
      });
  };



  return (
    <View style={styles.signin}>
      <View style={styles.icon}>
        <View style={styles.iconChild} />
        <Image
          style={styles.iconItem}
          contentFit="cover"
          source={require("../assets/logo.png")}
        />
      </View>
      <Text style={[styles.welcomeBackTo, styles.signInToTypo]}>
        Welcome back to fashion!
      </Text>
      <Text style={[styles.signInTo, styles.signInToTypo]}>
        Sign in to continue
      </Text>
      <View style={[styles.emailForm, styles.formLayout]}>
        <Image
          style={[styles.systemIcon24pxmessage, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/antdesignuseroutlined.png")}
        />
        <Text style={[styles.yourEmail, styles.yourEmailTypo]}>
          
        </Text>
        <TextInput
        style={[styles.Emai]}
        placeholder="Your Email / Phone Number"
        value={useremail}
        onChangeText={text => setEmail(text)}
      />
      
        <Image
          style={[styles.systemIcon24pxmessage, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/antdesignuseroutlined.png")}
        />
      </View>
      <View style={[styles.passwordForm, styles.formLayout]}>
        <Image
          style={[styles.systemIcon24pxmessage, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/system-icon24pxpassword.png")}
        />
        <Text style={[styles.yourEmail, styles.yourEmailTypo]}></Text>
        <TextInput
        style={[styles.Pass]}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      </View>
      
      <View style={styles.orLine}>
        <Text style={[styles.or, styles.amFlexBox]}>OR</Text>
        <View style={[styles.orLineChild, styles.linePosition]} />
        <View style={[styles.orLineItem, styles.linePosition]} />
      </View>
      <Text style={[styles.forgotPassword, styles.forgotPasswordTypo]}>
        Forgot Password?
      </Text>
      <Text style={[styles.dontHaveAContainer, styles.forgotPasswordTypo]}>
        <Text style={styles.dontHaveA}>Don’t have a account?</Text>
        <Text style={styles.register}>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.register1}onPress={() => navigation.navigate('SignUp')}>Register</Text>
        </Text>
      </Text>
      <TouchableHighlight   onPress={handleSignIn}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.login}>Login</Text>
      </View>


      </TouchableHighlight>
      <View style={styles.rememberMeParent}>
        <Text style={[styles.rememberMe, styles.yourEmailTypo]}>
          Remember Me
        </Text>
        <View style={styles.groupItem} />
      </View>
      <View style={styles.image13Parent}>
        <Image
          style={[styles.image13Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-13.png")}
        />
        <Image
          style={[styles.groupInner, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-425.png")}
        />
        <Text style={[styles.loginUsing, styles.amFlexBox]}>Login using</Text>
        <Image
          style={[styles.image17Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-17.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  amFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  Pass:{
    top:10,
    left:60,
    fontSize:17,
    
  },
  Emai:{
    top:10,
    left:60,
    fontSize:17,
  },
  iconLayout: {
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  signInToTypo: {
    textAlign: "center",
    letterSpacing: 1,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  formLayout: {
    height: 48,
    borderColor: Color.colorGainsboro,
    width: 343,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    left: 36,
    position: "absolute",
    overflow: "hidden",
  },
  yourEmailTypo: {
    lineHeight: 25,
    color: Color.colorGray,
    letterSpacing: 1,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  linePosition: {
    height: 1,
    borderTopWidth: 1,
    top: 10,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    position: "absolute",
  },
  forgotPasswordTypo: {
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
  },
  groupChildLayout: {
    height: 52,
    width: 345,
    position: "absolute",
  },
  iconPosition: {
    height: 35,
    top: 38,
    position: "absolute",
  },
  am: {
    top: 4,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 0,
  },
  antDesignwifiOutlinedIcon: {
    left: 315,
    top: 0,
  },
  bibatteryIcon: {
    left: 349,
    top: 0,
  },
  amParent: {
    top: 7,
    left: 20,
    width: 373,
    height: 24,
    position: "absolute",
  },
  iconItem: {
    height: "100%",
    width: "100%",
    top: "27.78%",
    right: "27.78%",
    bottom: "27.78%",
    left: "10.78%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    top: 80,
    left: 172,
    width: 72,
    height: 72,
    position: "absolute",
  },
  welcomeBackTo: {
    top: 178,
    left: 100,
    lineHeight: 27,
    color: "#324a59",
    fontWeight: "700",
  },
  signInTo: {
    top: 205,
    left: 133,
    lineHeight: 32,
    color: Color.colorGray,
  },
  systemIcon24pxmessage: {
    top: 12,
    left: 16,
  },
  yourEmail: {
    top: 13,
    left: 50,
    width: 277,
  },
  emailForm: {
    top: 289,
    backgroundColor: Color.colorWhite,
  },
  passwordForm: {
    top: 345,
  },
  or: {
    left: 162,
    letterSpacing: 0.1,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGray,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: 0,
  },
  orLineChild: {
    width: 135,
    left: 0,
  },
  orLineItem: {
    left: 206,
    width: 138,
  },
  orLine: {
    top: 551,
    left: 38,
    height: 21,
    width: 343,
    position: "absolute",
  },
  forgotPassword: {
    top: 403,
    left: 273,
    color: "#324a59",
    fontWeight: "700",
  },
  dontHaveA: {
    color: Color.colorGray,
  },
  text: {
    color: "#5c61f4",
  },
  register1: {
    color: "#324a59",
  },
  register: {
    fontWeight: "700",
  },
  dontHaveAContainer: {
    top: 749,
    left: 120,
  },
  groupChild: {
    borderRadius: Border.br_8xs,
    width: 345,
    backgroundColor: "#324a59",
    left: 0,
    top: 0,
  },
  login: {
    top: 16,
    left: 151,
    color: Color.colorWhite,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 463,
    left: 34,
  },
  rememberMe: {
    left: 23,
    top: 0,
  },
  groupItem: {
    top: 5,
    borderRadius: 2,
    borderColor: "#bdc0cd",
    width: 15,
    height: 15,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  rememberMeParent: {
    top: 415,
    width: 115,
    height: 25,
    left: 36,
    position: "absolute",
  },
  image13Icon: {
    left: 72,
    width: 35,
    height: 35,
    top: 38,
  },
  groupInner: {
    left: 150,
    width: 35,
    height: 35,
    top: 38,
  },
  loginUsing: {
    left: 54,
    fontSize: 15,
    color: "#323232",
    top: 0,
  },
  image17Icon: {
    width: 29,
    height: 35,
    top: 38,
    left: 0,
  },
  image13Parent: {
    top: 614,
    left: 114,
    width: 185,
    height: 73,
    position: "absolute",
  },
  signin: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default SignIn;
