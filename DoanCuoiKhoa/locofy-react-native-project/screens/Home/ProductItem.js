import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import {
  FontFamily,
  Color,
  FontSize,
  Border,
  Padding,
} from "../../GlobalStyles";
const formattedPrice = (price) => {
  return new Number(price).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

const ProductItem = ({ imageSource, textContent, textPrice }) => {
  return (
    <View style={styles.Product}>
    {/* <TouchableHighlight onPress={() => navigation.navigate('ProductDetail')}> */}
      <Image 
      source={{ 
        uri: imageSource,
      }}
      // source={require("../assets/Home/ao-jean-w2atn08230bosht.jpeg")}             
      style={[styles.maskGroupIcon, styles.iconPosition]}
      contentFit="cover"
      resizeMode="contain"/>
    {/* </TouchableHighlight>  */}
    <View style={styles.shoppingBagIconWrapper}>
      <Image
        style={styles.iconLayout}
        contentFit="cover"
        source={require("../../assets/icons/addbutton.png")}
      />
   
    </View>
    <Text style={[styles.minimalStand, styles.text1Position]}>
       {textContent}
    </Text>
    <Text style={[styles.text1, styles.text1Position]}>$ {textPrice}</Text>
  </View>
)
}
export default ProductItem;

const styles = StyleSheet.create({
  Product: {
    width: 200,
    height: 195,
    borderRadius: 10,
    margin: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5, // Adjust the opacity as needed
    shadowRadius: 20, // Adjust the radius as needed
    elevation: 2, // Android shadow
  },

  minimalStand: {
    color: "#606060",
    top: 140,
    fontFamily: FontFamily.PoppinsMedium,
  },
  text1Position: {
    left: 2,
    textAlign: "left",
    fontSize: 14,
    marginStart: 9,
    position: "absolute",
  },
  text1: {
    color: "#303030",
    fontFamily: FontFamily.quicksandBold,
    top: 170,
    fontWeight: "700",
  },
  maskGroupIcon: {
    height: 150,
  },
  iconPosition: {
    width: 190,
    height: 130,
    top: 0,
    left: 0,
    marginStart: 0,

    margin: 15,
    resizeMode: "stretch",
  },
  shoppingBagIconWrapper: {
    top: 155,
    left: 150,
    borderRadius: 6,
    //backgroundColor: "rgba(96, 96, 96, 0.7)",
    padding: 5,
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    height: 25,
    width: 25,
    overflow: "hidden",
  },
});
