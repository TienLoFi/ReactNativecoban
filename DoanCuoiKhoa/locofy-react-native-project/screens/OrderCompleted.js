import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const statusBarHeight = StatusBar.currentHeight || 0; // Get the status bar height
const { width, height } = Dimensions.get("window"); // Lấy chiều rộng màn hình
const buttonSize = width * 0.06; // Đặt kích thước dựa trên chiều rộng màn hình
const buttonMargin = width * 0.03; // Đặt khoảng cách dựa trên chiều rộng màn hình
const buttonTop = height * 0.06; // Đặt top dựa trên chiều cao màn hình
const navigationBarHeight = Platform.OS === "android" ? 56 : 44; // Thay 56 bằng giá trị thích hợp cho thanh điề
const paddingBottom = statusBarHeight + navigationBarHeight;

const OrderCompleted = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.orderCompleted}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            top: buttonTop,
            borderWidth: 1,
            padding: 5,
            borderRadius: buttonSize / 2, // Đặt bán kính của nút để tạo hình tròn
            marginLeft: buttonMargin,
            position: "absolute",
          }}
        >
          <Image
            source={require("../assets/icons/arrowleft.png")}
            style={{
              width: buttonSize,
              height: buttonSize,
              tintColor: "black",
            }}
          />
        </TouchableOpacity>

        <View style={[styles.orderCompletedChild, styles.orderLayout]} />
        <View style={[styles.orderCompletedItem, styles.orderLayout]} />

        <TouchableOpacity onPress={() => navigation.navigate("TabNavigator")}>
        
          <Text style={[styles.continueShopping, styles.continueShoppingTypo]}>
            Tiếp tục mua sắm
          </Text>
        </TouchableOpacity>
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
    </SafeAreaView>
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
