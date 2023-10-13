import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View,TouchableHighlight } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";


  
const Details = ({navigation}) => {
  const onPressBack = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.details}>
      <Image
        style={styles.detailsChild}
        contentFit="cover"
        source={require("../assets/images/aobalo1.jpg")}
      />
      <Image
        style={[styles.heartIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icons/heart.png")}
      />
             <TouchableHighlight onPress={onPressBack}>
      <Image
        style={[styles.arrowLeftIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icons/arrowleft.png")}
      />
      </TouchableHighlight>
      <Text style={[styles.text, styles.mFlexBox]}>180.000đ</Text>
      <Text style={[styles.cottonQueenTShirt, styles.mFlexBox]}>
      Áo Ba Lỗ Gym Nam
      </Text>
      <Text style={[styles.color, styles.sizeTypo]}>Color</Text>
      <Text style={[styles.size, styles.sizeTypo]}>Size</Text>
      <Text style={[styles.sizSigma, styles.sizeTypo]}>Siz sigma</Text>
      <Image
        style={[styles.detailsItem, styles.detailsChildLayout1]}
        contentFit="cover"
        source={require("../assets/icons/ellipse-7.png")}
      />
      <Image
        style={[styles.detailsInner, styles.detailsChildLayout1]}
        contentFit="cover"
        source={require("../assets/icons/ellipse-7.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.detailsChildLayout1]}
        contentFit="cover"
        source={require("../assets/icons/ellipse-8.png")}
      />
      <Image
        style={[styles.detailsChild1, styles.detailsChildLayout1]}
        contentFit="cover"
        source={require("../assets/icons/ellipse-11.png")}
      />
      <Image
        style={[styles.detailsChild2, styles.detailsChildPosition]}
        contentFit="cover"
        source={require("../assets/icons/ellipse-11.png")}
      />
      <Image
        style={[styles.detailsChild3, styles.detailsChildLayout1]}
        contentFit="cover"
        source={require("../assets/icons/ellipse-9.png")}
      />
      <Image
        style={[styles.detailsChild4, styles.detailsChildLayout1]}
        contentFit="cover"
        source={require("../assets/icons/ellipse-11.png")}
      />
      <Image
        style={[styles.detailsChild5, styles.detailsChildPosition]}
        contentFit="cover"
        source={require("../assets/icons/ellipse-11.png")}
      />
      <Text style={[styles.s, styles.sClr]}>S</Text>
      <Text style={[styles.m, styles.sTypo]}>M</Text>
      <Text style={[styles.text1, styles.textTypo]}>+</Text>
      <Text style={[styles.text2, styles.sizeTypo]}>1</Text>
      <Text style={[styles.l, styles.sTypo]}>L</Text>
      <Text style={[styles.text3, styles.textTypo]}>-</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.addToCart, styles.sClr]}>Thêm Dô Giỏ</Text>
      <View style={[styles.detailsChild6, styles.rectangleViewLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.detailsChildLayout]}
        contentFit="cover"
        source={require("../assets/images/aobalo2.jpg")}
      />
      <Image
        style={[styles.detailsChild7, styles.detailsChildLayout]}
        contentFit="cover"
        source={require("../assets/images/aobalo4.jpg")}
      />
      <Image
        style={[styles.detailsChild8, styles.detailsChildLayout]}
        contentFit="cover"
        source={require("../assets/images/aobalo3.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 24,
    width: 24,
    top: 35,
    position: "absolute",
    overflow: "hidden",
  },
  mFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  sizeTypo: {
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  detailsChildLayout1: {
    height: 30,
    width: 30,
    top: 674,
    position: "absolute",
  },
  detailsChildPosition: {
    top: 748,
    height: 30,
    width: 30,
    position: "absolute",
  },
  sClr: {
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  sTypo: {
    top: 680,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  textTypo: {
    top: 754,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleViewLayout: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  detailsChildLayout: {
    height: 55,
    width: 54,
    borderRadius: Border.br_4xs,
    left: 27,
    position: "absolute",
  },
  detailsChild: {
    top: 11,
    left: 11,
    borderRadius: 24,
    width: 353,
    height: 521,
    position: "absolute",
  },
  heartIcon: {
    left: 316,
  },
  arrowLeftIcon: {
    left: 34,
  },
  text: {
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: 281,
    color: Color.colorBlack,
    top: 567,
  },
  cottonQueenTShirt: {
    left: 27,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    top: 567,
  },
  color: {
    fontSize: FontSize.size_sm,
    top: 646,
    fontWeight: "500",
    left: 27,
  },
  size: {
    left: 226,
    fontSize: FontSize.size_sm,
    top: 646,
    fontWeight: "500",
  },
  sizSigma: {
    top: 601,
    fontSize: 12,
    textDecoration: "underline",
    left: 27,
  },
  detailsItem: {
    left: 27,
  },
  detailsInner: {
    left: 226,
  },
  ellipseIcon: {
    left: 73,
  },
  detailsChild1: {
    left: 272,
  },
  detailsChild2: {
    left: 27,
  },
  detailsChild3: {
    left: 119,
  },
  detailsChild4: {
    left: 318,
  },
  detailsChild5: {
    left: 107,
  },
  s: {
    left: 237,
    top: 680,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  m: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    left: 281,
  },
  text1: {
    left: 38,
  },
  text2: {
    top: 751,
    left: 80,
    fontSize: FontSize.size_xl,
  },
  l: {
    left: 329,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  text3: {
    left: 119,
  },
  rectangleView: {
    top: 738,
    left: 203,
    backgroundColor: "#ff937b",
    width: 145,
    height: 50,
  },
  addToCart: {
    top: 753,
    left: 231,
    fontSize: 16,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  detailsChild6: {
    top: 332,
    left: 20,
    backgroundColor: "#f0f0f0",
    width: 68,
    height: 190,
  },
  rectangleIcon: {
    top: 461,
  },
  detailsChild7: {
    top: 399,
  },
  detailsChild8: {
    top: 337,
  },
  details: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Details;
