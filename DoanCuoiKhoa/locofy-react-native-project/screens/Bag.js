import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Bag = ({ navigation }) => {
  const onPressBack = () => {
    navigation.goBack();
  };
  const onPressOrder = () => {
    navigation.navigate("PayAndOrder");
  };

  return (
    <View style={[styles.bag, styles.bagLayout]}>
      <TouchableHighlight onPress={onPressBack}>
     
        <Image
          style={[styles.arrowLeftIcon, styles.trash2IconLayout]}
          contentFit="cover"
          source={require("../assets/icons/arrowleft.png")}
        />
      </TouchableHighlight>
      <Text style={[styles.text, styles.textTypo4]}>đ0</Text>
      <Text style={styles.giHng2}>Giỏ Hàng(2)</Text>
      <View style={[styles.chat42327931Parent, styles.chatIconPosition]}>
        <Image
          style={styles.chat42327931Icon}
          contentFit="cover"
          source={require("../assets/icons/chat-4232793-1.png")}
        />
        <View style={[styles.ellipseParent, styles.groupChildPosition]}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/icons/ellipse-2.png")}
          />
          <Text style={styles.text1}>2</Text>
        </View>
      </View>
      <Text style={[styles.tngThanhTon, styles.ttCTypo]}>Tổng Thanh Toán:</Text>
      <Text style={[styles.ttC, styles.ttCTypo]}>Tất Cả</Text>
      <Image
        style={[styles.bagChild, styles.bagChildLayout]}
        contentFit="cover"
        source={require("../assets/icons/ellipse-13.png")}
      />
      <Image
        style={[styles.bagItem, styles.bagPosition]}
        contentFit="cover"
        source={require("../assets/icons/ellipse-13.png")}
      />
      <Image
        style={[styles.bagInner, styles.bagInnerPosition]}
        contentFit="cover"
        source={require("../assets/icons/ellipse-17.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.bagInnerPosition]}
        contentFit="cover"
        source={require("../assets/icons/ellipse-17.png")}
      />
      <Image
        style={[styles.bagChild1, styles.bagPosition]}
        contentFit="cover"
        source={require("../assets/icons/ellipse-13.png")}
      />
      <Image
        style={[styles.bagChild2, styles.bagChildLayout]}
        contentFit="cover"
        source={require("../assets/icons/ellipse-13.png")}
      />
      <Text style={[styles.text2, styles.textTypo2]}>+</Text>
      <Text style={[styles.text3, styles.textTypo2]}>+</Text>
      <Text style={[styles.text4, styles.textTypo1]}>1</Text>
      <Text style={[styles.text5, styles.textTypo1]}>1</Text>
      <Text style={[styles.m, styles.textTypo2]}>M</Text>
      <Text style={[styles.s, styles.textTypo2]}>S</Text>
      <Text style={[styles.text6, styles.textTypo]}>-</Text>
      <Text style={[styles.text7, styles.textTypo]}>-</Text>
      <TouchableHighlight onPress={onPressOrder}>
        <View style={styles.rectangleView} />
      </TouchableHighlight>
      <Text style={[styles.muaHng, styles.luTypo2]}>Mua Hàng</Text>

      <Image
        style={[styles.rectangleIcon, styles.bagChild3Layout]}
        contentFit="cover"
        source={require("../assets/images/rectangle-9.png")}
      />
      <Image
        style={[styles.bagChild3, styles.bagChild3Layout]}
        contentFit="cover"
        source={require("../assets/images/rectangle-10.png")}
      />
      <Text style={[styles.greyTShirt, styles.luTypo]}>Grey T-shirt</Text>
      <Text style={[styles.cottonQueenT, styles.text9Typo]}>
        Cotton queen T
      </Text>
      
      <Text style={[styles.text8, styles.luTypo]}>$41.00</Text>
      <Text style={[styles.text9, styles.text9Typo]}>$43.00</Text>
      <Image
        style={[styles.trash2Icon, styles.trash2IconPosition]}
        contentFit="cover"
        source={require("../assets/icons/trash2.png")}
      />
      <Image
        style={[styles.trash2Icon1, styles.trash2IconPosition]}
        contentFit="cover"
        source={require("../assets/icons/trash2.png")}
      />
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.groupWrapper, styles.groupPosition]}>
          <View style={[styles.groupWrapper, styles.groupPosition]}>
            <View style={[styles.groupItem, styles.groupPosition]} />
          </View>
        </View>
        <Text style={[styles.nhpMGim, styles.ttCTypo]}>
          Nhập Mã Giảm Giá (Nếu Có)
        </Text>
      </View>
      <Image
        style={[styles.lineIcon, styles.lineLayout]}
        contentFit="cover"
        source={require("../assets/icons/line-1.png")}
      />
      <View style={[styles.lineView, styles.lineLayout]} />
      <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Text style={[styles.lu, styles.luTypo1]}>Lưu</Text>
      </View>
      <Image
        style={[styles.bagChild4, styles.bagChildLayout]}
        contentFit="cover"
        source={require("../assets/icons/ellipse-26.png")}
      />
      <Image
        style={[styles.bagChild5, styles.bagChildPosition]}
        contentFit="cover"
        source={require("../assets/icons/ellipse-26.png")}
      />
      <Image
        style={[styles.bagChild6, styles.bagChildPosition]}
        contentFit="cover"
        source={require("../assets/icons/ellipse-26.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bagLayout: {
    overflow: "hidden",
    width: "100%",
  },
  trash2IconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  textTypo4: {
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  trash2IconPosition: {
    left: 348,
    position: "absolute",
  },
  chatIconPosition: {
    left: 318,
    position: "absolute",
  },
  groupChildPosition: {
    right: "0%",
    top: "22%",
    position: "absolute",
  },
  ttCTypo: {
    fontFamily: FontFamily.quicksandRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  bagChildLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  bagPosition: {
    top: 172,
    height: 30,
    width: 30,
    position: "absolute",
  },
  bagInnerPosition: {
    left: 348,
    height: 30,
    width: 30,
    position: "absolute",
  },
  textTypo2: {
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
  },
  textTypo1: {
    left: 250,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo: {
    left: 295,
    fontFamily: FontFamily.quicksandMedium,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  luTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
    left: 200,
  },
  luTypo2: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
    left: 260,
  },
  luTypo1: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
    left: 30,
  },
  bagChild3Layout: {
    height: 85,
    width: 76,
    left: 100,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  text9Typo: {
    left: 200,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupLayout: {
    width: 322,
    height: 50,
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    left: 0,
  },
  lineLayout: {
    height: 0,
    width: 321,
    left: 50,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 40,
    width: 85,
    position: "absolute",
  },
  bagChildPosition: {
    left: 40,
    height: 30,
    width: 30,
    position: "absolute",
  },
  arrowLeftIcon: {
    top: 50,
    left: 27,
    position: "absolute",
  },
  text: {
    top: 665,
    left: 350,
    fontSize: 30,
    color: Color.colorLightsalmon,
    textAlign: "right",
    position: "absolute",
  },
  giHng2: {
    top: 50,
    left: 154,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  chat42327931Icon: {
    top: 20,
    width: 34,
    height: 34,
    left: 40,
    position: "absolute",
  },
  groupChild: {
    height: "100%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  text1: {
    top: "40%",
    left: "35%",
    fontSize: 10,
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorWhite,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  ellipseParent: {
    height: "83.63%",
    width: "78.82%",
    bottom: "47.37%",
    left: 57,
  },
  chat42327931Parent: {
    top: 24,

    width: 30,
    height: 30,
  },
  tngThanhTon: {
    top: 680,
    left: 35,
  },
  ttC: {
    top: 740,
    left: 75,
  },
  bagChild: {
    left: 200,
    top: 284,
    height: 30,
    width: 30,
  },
  bagItem: {
    left: 200,
  },
  bagInner: {
    top: 229,
  },
  ellipseIcon: {
    top: 111,
  },
  bagChild1: {
    left: 284,
  },
  bagChild2: {
    left: 284,
    top: 284,
    height: 30,
    width: 30,
  },
  text2: {
    left: 210,
    top: 290,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.quicksandMedium,
    textAlign: "left",
    position: "absolute",
    color: Color.colorBlack,
  },
  text3: {
    top: 178,
    left: 210,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.quicksandMedium,
    textAlign: "left",
    position: "absolute",
    color: Color.colorBlack,
  },
  text4: {
    top: 287,
  },
  text5: {
    top: 175,
  },
  m: {
    left: 357,
    top: 233,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.quicksandMedium,
    textAlign: "left",
    position: "absolute",
    color: Color.colorWhite,
  },
  s: {
    left: 358,
    top: 115,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.quicksandMedium,
    textAlign: "left",
    position: "absolute",
    color: Color.colorWhite,
  },
  text6: {
    top: 290,
  },
  text7: {
    top: 177,
  },
  rectangleView: {
    top: 718,
    left: 215,
    backgroundColor: Color.colorLightsalmon,
    width: 173,
    height: 50,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  muaHng: {
    left: 250,
    top: 733,
    color: Color.colorWhite,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  rectangleIcon: {
    top: 235,
  },
  bagChild3: {
    top: 117,
  },
  greyTShirt: {
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    top: 229,
    left: 150,
    color: Color.colorBlack,
  },
  cottonQueenT: {
    top: 117,
  },
  text8: {
    top: 254,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    left: 154,
    color: Color.colorBlack,
  },
  text9: {
    top: 142,
  },
  trash2Icon: {
    top: 169,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  trash2Icon1: {
    top: 287,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  groupItem: {
    backgroundColor: "#e8e8e8",
    width: 362,
    height: 50,
    position: "absolute",
    borderRadius: Border.br_mini,
    top: 0,
  },
  groupWrapper: {
    width: 322,
    height: 50,
    position: "absolute",
  },
  nhpMGim: {
    top: 17,
    left: 13,
    width: 198,
    opacity: 0.2,
  },
  groupParent: {
    top: 609,
    left: 27,
  },
  lineIcon: {
    top: 584,
  },
  lineView: {
    top: 384,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.4)",
    borderTopWidth: 0.2,
  },
  groupInner: {
    borderRadius: 11,
    backgroundColor: "#42d1f0",
    top: 0,
    left: 0,
  },
  lu: {
    top: 10,
    left: 29,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    color: Color.colorWhite,
  },
  rectangleParent: {
    top: 614,
    left: 260,
  },
  bagChild4: {
    left: 31,
    top: 735,
  },
  bagChild5: {
    top: 265,
  },
  bagChild6: {
    top: 145,
  },
  bag: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
  },
});

export default Bag;
