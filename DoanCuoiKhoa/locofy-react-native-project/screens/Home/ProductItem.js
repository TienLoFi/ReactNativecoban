import { StyleSheet, Text, View, } from "react-native";
import React from "react";
import { Image } from "expo-image";
import {
  FontFamily,
  Color,
  FontSize,
  Border,
  Padding,
} from "../../GlobalStyles";
const ProductItem = ({ imageSource, textContent, textPrice }) => {
    return(
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
export default ProductItem

const styles = StyleSheet.create({
    Product:{
        width:200,
        height:195,
        borderRadius:10,
        backgroundColor:"#fff",
        marginBottom:20,
        paddingHorizontal: 10,
   
      },
      minimalStand: {
        color: "#606060",
        top: 140,
        fontFamily:FontFamily.quicksandRegular,
      },
      text1Position: {
        left: 2,
        textAlign: "left",
        fontSize: 14,
        marginStart:9,
        position: "absolute",
      },
      text1: {
        color: "#303030",
        fontFamily: FontFamily.quicksandBold,
                top: 170,
        fontWeight: "700",
      },
      maskGroupIcon: {
        height: 200,
      },
      iconPosition: {
        width: 180,
        height:116,
        top: 0,
        left: 0,
        marginStart:0,
        borderRadius:10,
        margin: 5,
      },
      shoppingBagIconWrapper: {
        top: 155,
        left: 150,
        borderRadius: 6,
        // backgroundColor: "rgba(96, 96, 96, 0.7)",
        padding: 5,
        flexDirection: "row",
        position: "absolute",
      },
      iconLayout: {
        height: 25,
        width: 25,
        overflow: "hidden",
      },    
  
})