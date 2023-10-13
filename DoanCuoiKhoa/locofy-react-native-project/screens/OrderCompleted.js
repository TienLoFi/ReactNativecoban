import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const OrderCompleted = ({ navigation }) => {
  const onPressBack = () => {
    navigation.navigate("PayAndOrder");
  };
  const onPressBackHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.orderCompleted}>
      <TouchableHighlight onPress={onPressBack}>
        <Image
          style={styles.arrowLeftIcon}
          contentFit="cover"
          source={require("../assets/icons/arrowleft.png")}
        />
      </TouchableHighlight>
      <View style={[styles.orderCompletedChild, styles.orderLayout]} />
      <View style={[styles.orderCompletedItem, styles.orderLayout]} />
      <TouchableHighlight onPress={onPressBackHome}>
        <Text style={[styles.continueShopping, styles.continueShoppingTypo]}>
          Tiếp tục mua sắm
        </Text>
      </TouchableHighlight>
      <Text style={[styles.viewOrderDetails, styles.continueShoppingTypo]}>
        Xem chi tiết đơn hàng
      </Text>
      <Image
        style={styles.orderCompletedInner}
        contentFit="cover"
        source={require("../assets/icons/group-2.png")}
      />
      <Text style={styles.paymentDoneSuccessfully}>
        Thanh toán được thực hiện thành công và đơn hàng của bạn đã được đặt.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  orderLayout: {
    height: 50,
    width: 321,
    borderRadius: Border.br_mini,
    left: 45,
    position: "absolute",
  },
  continueShoppingTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  arrowLeftIcon: {
    top: 45,
    width: 24,
    height: 24,
    left: 27,
    position: "absolute",
    overflow: "hidden",
  },
  orderCompletedChild: {
    top: 710,

    backgroundColor: Color.colorLightsalmon,
  },
  orderCompletedItem: {
    top: 640,
    borderStyle: "solid",
    borderColor: Color.colorLightsalmon,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    width: 321,
    borderRadius: Border.br_mini,
  },
  continueShopping: {
    top: 723,
    left: 130,
    color: Color.colorWhite,
  },
  viewOrderDetails: {
    top: 651,
    left: 130,
    color: Color.colorLightsalmon,
  },
  orderCompletedInner: {
    height: "16.87%",
    width: "36.53%",
    top: "35.34%",
    right: "31.73%",
    bottom: "47.78%",
    left: "31.73%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  paymentDoneSuccessfully: {
    top: 444,
    left: 75,
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    width: 248,
    height: 74,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  orderCompleted: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default OrderCompleted;
