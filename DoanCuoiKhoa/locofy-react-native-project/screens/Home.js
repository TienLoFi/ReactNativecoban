import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Home = ({ navigation }) => {
  const onPressBag = () => {
    navigation.navigate("Bag");
  };
  const onPressUser = () => {
    navigation.navigate("Profile");
  };
  const onPressDetail = () => {
    navigation.navigate("Details");
  };
  const onPressHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.home}>
      <Image
        style={[styles.TopNavChild, styles.TopLayout]}
        contentFit="cover"
        source={require("../assets/icons/MenuNav.png")}
      />

      <Image
        style={styles.homeChild}
        contentFit="cover"
        source={require("../assets/icons/ellipse-1.png")}
      />

      <Image
        style={styles.menu1Icon}
        contentFit="cover"
        source={require("../assets/icons/menu-1.png")}
      />

      <ScrollView>
        <Text style={styles.food}>Clothes</Text>
        <Text style={[styles.delivery, styles.popularTypo]}>
          Gym CLothes
        </Text>
        <Image
          style={styles.loupe1Icon}
          contentFit="cover"
          source={require("../assets/icons/loupe-1.png")}
        />
        <Image
          style={styles.loupe1Icon}
          contentFit="cover"
          source={require("../assets/icons/loupe-1.png")}
        />

        <TextInput
          style={[styles.search, styles.textTypo1]}
          placeholder="Tìm Kiếm..."
        />
        <Text style={[styles.categories, styles.popularTypo]}>Danh Mục</Text>
        <Text style={[styles.popular, styles.popularTypo]}>Bán Chạy</Text>
        <Image
          style={styles.homeItem}
          contentFit="cover"
          source={require("../assets/icons/line-2.png")}
        />

        <View style={[styles.groupParent, styles.groupLayout1]}>
          <View style={styles.rectangleShadowBox}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
          </View>

          <Image
            style={[styles.groupItem, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/icons/ellipse-2.png")}
          />
          <Text style={[styles.pizza, styles.pizzaTypo]}>Áo Thể Thao</Text>
          <Image
            style={[styles.icons8Pizza1001, styles.icons8Layout]}
            contentFit="cover"
            source={require("../assets/images/clothes.png")}
          />
          <Image
            style={[styles.rightChevron11, styles.rightLayout]}
            contentFit="cover"
            source={require("../assets/icons/rightchevron-1-1.png")}
          />
        </View>
        <View style={[styles.groupContainer, styles.groupLayout1]}>
          <View style={styles.rectangleShadowBox}>
            <View style={styles.groupInner} />
          </View>
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/icons/ellipse-21.png")}
          />
          <Text style={[styles.seafood, styles.pizzaTypo]}>Giày</Text>
          <Image
            style={[styles.icons8Pizza1001, styles.icons8Layout]}
            contentFit="cover"
            source={require("../assets/images/sneakers.png")}
          />
          <Image
            style={[styles.rightChevron11, styles.rightLayout]}
            contentFit="cover"
            source={require("../assets/icons/rightchevron-1-11.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupLayout1]}>
          <View style={styles.rectangleShadowBox}>
            <View style={styles.groupInner} />
          </View>
          <Image
            style={[styles.groupChild1, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/icons/ellipse-21.png")}
          />
          <Text style={[styles.softDrinks, styles.pizzaTypo]}>
            Quần Thể Thao
          </Text>
          <Image
            style={[styles.rightChevron112, styles.rightLayout]}
            contentFit="cover"
            source={require("../assets/icons/rightchevron-1-12.png")}
          />
        </View>
        <Image
          style={[styles.icons8OrangeSodaBottle641, styles.icons8Layout]}
          contentFit="cover"
          source={require("../assets/images/shorts.png")}
        />
        <View style={[styles.groupView, styles.groupLayout1]}>
          <View style={styles.rectangleShadowBox}>
            <View style={styles.groupInner} />
          </View>
          <Image
            style={[styles.groupChild1, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/icons/ellipse-21.png")}
          />
          <Text style={[styles.softDrinks, styles.pizzaTypo]}>
            Quần Thể Thao
          </Text>
          <Image
            style={[styles.rightChevron112, styles.rightLayout]}
            contentFit="cover"
            source={require("../assets/icons/rightchevron-1-12.png")}
          />
        </View>
        <Image
          style={[styles.icons8OrangeSodaBottle641, styles.icons8Layout]}
          contentFit="cover"
          source={require("../assets/images/shorts.png")}
        />

        <View style={[styles.homeitem2, styles.homeitem2]}>
          <TouchableHighlight onPress={onPressDetail}>
            <Image
              style={[styles.homeInner, styles.homeInnerLayout]}
              contentFit="cover"
              source={require("../assets/images/aobalo1.jpg")}
            />
          </TouchableHighlight>

          <View>
            <Image
              style={[styles.rectangleIcon, styles.homeInnerLayout]}
              contentFit="cover"
              source={require("../assets/images/quantapgym1.jpg")}
            />
          </View>

          <Image
            style={[styles.homeChild1, styles.homeChildLayout]}
            contentFit="cover"
            source={require("../assets/images/giaytapgym1.jpg")}
          />
          <Image
            style={[styles.homeChild2, styles.homeChildLayout]}
            contentFit="cover"
            source={require("../assets/images/rectangle-5.png")}
          />

          <Image
            style={[styles.homeChild2, styles.homeChildLayout]}
            contentFit="cover"
            source={require("../assets/images/rectangle-5.png")}
          />
          <Image
            style={[styles.homeChild2, styles.homeChildLayout]}
            contentFit="cover"
            source={require("../assets/images/rectangle-5.png")}
          />
          <Image
            style={[styles.ellipseIcon, styles.homeChild3Layout]}
            contentFit="cover"
            source={require("../assets/icons/ellipse-3.png")}
          />
          <Image
            style={[styles.homeChild3, styles.homeChild3Layout]}
            contentFit="cover"
            source={require("../assets/icons/ellipse-3.png")}
          />
          <Image
            style={[styles.homeChild4, styles.homeChildPosition]}
            contentFit="cover"
            source={require("../assets/icons/ellipse-3.png")}
          />
          <Image
            style={[styles.homeChild5, styles.homeChildPosition]}
            contentFit="cover"
            source={require("../assets/icons/ellipse-3.png")}
          />
          <Image
            style={[styles.heartIcon, styles.heartIconLayout1]}
            contentFit="cover"
            source={require("../assets/icons/heart1.png")}
          />
          <Image
            style={[styles.heartIconn, styles.heartIconLayout1]}
            contentFit="cover"
            source={require("../assets/icons/heart1.png")}
          />
          <Image
            style={[styles.heartIcon2, styles.heartIconPosition]}
            contentFit="cover"
            source={require("../assets/icons/heart1.png")}
          />
          <Image
            style={[styles.heartIcon3, styles.heartIconPosition]}
            contentFit="cover"
            source={require("../assets/icons/heart1.png")}
          />
          <Text style={[styles.cottonQueenT, styles.cottonTypo2]}>
            Áo Ba Lỗ Gym Nam
          </Text>

          <Text style={[styles.cottonStyleT, styles.cottonTypo2]}>
            Giày Thể Thao Nam
          </Text>
          <Text style={[styles.cottonQueenT2, styles.cottonTypo2]}>
            Áo Ba Lỗ Gym Nam
          </Text>
          <Text style={[styles.greyTShirt, styles.cottonTypo2]}>
            Quần 2 lớp Gym
          </Text>
          <Text style={[styles.text1, styles.textTypo2]}>180.000Đ</Text>
          <Text style={[styles.text2, styles.textTypo2]}>599.000Đ</Text>
          <Text style={[styles.text3, styles.textTypo2]}>139.099Đ</Text>
          <Text style={[styles.text4, styles.textTypo2]}>249.099Đ</Text>
        </View>
        <View style={{ height: 1500 }}></View>
      </ScrollView>

      <View>
        <Image
          style={[styles.TopNavChild, styles.TopLayout2]}
          contentFit="cover"
          source={require("../assets/icons/MenuNav.png")}
        />

        <TouchableHighlight onPress={onPressHome}>
          <Image
            style={[
              styles.notificationIcon4,
              styles.heartIconLayout5,
              { width: 24, height: 24 },
            ]}
            contentFit="cover"
            source={require("../assets/icons/notification-nav.png")}
          />
        </TouchableHighlight>
        <Image
          style={[styles.homeIcon1, styles.iconLayout5]}
          contentFit="cover"
          source={require("../assets/icons/Home1.png")}
        />
        <Image
          style={[styles.heartIcon1, styles.iconLayout5]}
          contentFit="cover"
          source={require("../assets/icons/heart.png")}
        />
        <TouchableHighlight onPress={onPressBag}>
          <Image
            style={[styles.BagIcon1, styles.iconLayout5]}
            contentFit="cover"
            source={require("../assets/icons/Bag2.png")}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={onPressUser}>
          <Image
            style={[styles.profileIcon, styles.iconLayout5]}
            contentFit="cover"
            source={require("../assets/icons/profile.png")}
          />
        </TouchableHighlight>
        <Text style={[styles.home5, styles.home1Typo]}>Home</Text>
        <View style={styles.bottomNavItem} />
        <Text style={[styles.hearttxt, styles.home1Typo]}>Liked</Text>
        <Text style={[styles.notificationtxt, styles.home1Typo]}>
          Thông Báo
        </Text>
        <Text style={[styles.bagtxt, styles.home1Typo]}>Giỏ Hàng</Text>

        <Text style={[styles.profile, styles.home1Typo]}>Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popularTypo: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  cottonTypo2: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo2: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  groupLayout1: {
    height: 177,
    width: 105,
    top: 312,
    position: "absolute",
  },
  groupChildPosition: {
    backgroundColor: Color.colorGoldenrod,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 26,
    width: 26,
    top: 131,
    position: "absolute",
  },
  pizzaTypo: {
    top: 94,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorDarkslategray,
    position: "absolute",
  },
  icons8Layout: {
    height: 60,
    width: 60,
    position: "absolute",
  },
  rightLayout: {
    height: 8,
    width: 8,
    top: 140,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleLayout: {
    height: 161,
    width: 335,
    left: 20,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  primaveraTypo: {
    top: 61,
    left: 22,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 10,
    width: 10,
    top: 130,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: 851,
    height: 10,
    width: 10,
    position: "absolute",
    overflow: "hidden",
  },
  homeChild: {
    top: 35,
    width: 40,
    height: 40,
    left: 20,
    position: "absolute",
    zIndex: 1,
  },
  menu1Icon: {
    top: 45,
    left: 331,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
    zIndex: 1,
  },
  food: {
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    top: 130,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_base,
    left: 20,
    position: "absolute",
  },
  delivery: {
    top: 155,
    fontSize: 32,
    color: "#ff591d",
  },
  loupe1Icon: {
    top: 230,
    width: 16,
    height: 16,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  search: {
    top: 224,
    color: "#cdcdcd",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
    left: 48,
  },
  categories: {
    top: 277,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontWeight: "700",
  },
  popular: {
    top: 509,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontWeight: "700",
  },
  homeItem: {
    top: 244,
    left: 46,
    width: 309,
    height: 3,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGoldenrod,
    top: 0,
    height: 177,
    width: 105,
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    left: 0,
    top: 0,
    height: 177,
    width: 105,
    position: "absolute",
  },
  groupItem: {
    left: 39,
  },
  pizza: {
    left: 12,
  },
  icons8Pizza1001: {
    left: 22,
    top: 24,
  },
  rightChevron11: {
    left: 48,
  },
  groupParent: {
    left: 20,
  },
  groupInner: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    height: 177,
    width: 105,
    position: "absolute",
  },
  seafood: {
    left: 35,
  },
  groupContainer: {
    left: 145,
  },
  groupChild1: {
    left: 35,
  },
  softDrinks: {
    left: 13,
  },
  rightChevron112: {
    left: 44,
  },
  groupView: {
    left: 274,
  },
  icons8OrangeSodaBottle641: {
    top: 336,
    left: 297,
  },
  groupChildShadowBox: {
    shadowColor: "#000",
    borderRadius: Border.br_6xl,
    height: 161,
    width: 335,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    left: 0,
    top: 0,
    position: "absolute",
  },
  unnamed1Icon: {
    top: 18,
    left: 176,
    width: 210,
    height: 125,
    position: "absolute",
  },
  weight540Gr: {
    top: 83,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorSilver,
    left: 22,
  },
  primaveraPizza: {
    color: Color.colorDarkslategray,
  },
  text: {
    top: 127,
    left: 125,
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  topOfThe: {
    left: 42,
    top: 24,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  crown1Icon: {
    top: 27,
    width: 12,
    height: 12,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild3: {
    top: 108,
    borderTopRightRadius: Border.br_6xl,
    borderBottomLeftRadius: Border.br_6xl,
    width: 90,
    height: 53,
  },
  plus1Icon: {
    left: 40,
  },
  star1Icon: {
    left: 110,
  },
  rectangleParent: {
    top: 540,
  },
  primaveraPizza1: {
    color: Color.colorBlack,
  },
  plus1Icon1: {
    left: 60,
  },
  star1Icon1: {
    left: 130,
  },
  rectangleGroup: {
    top: 721,
  },
  home: {
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
  slidersIcon: {
    left: 340,
    position: "absolute",
  },
  homeInner: {
    height: 248,

    top: 282,
  },
  rectangleIcon: {
    top: 620,
    height: 200,
  },
  homeChild1: {
    top: 282,
  },
  homeChild2: {
    top: 565,
  },
  ellipseIcon: {
    top: 292,
  },
  homeChild3: {
    top: 630,
  },
  homeChild4: {
    top: 292,
  },
  homeChild5: {
    top: 575,
  },

  cottonStyleT: {
    top: 483,
    left: 230,
  },
  heartIcon: {
    left: 141,
    height: 18,
    width: 18,
    top: 303,
  },
  heartIconn: {
    top: 641,
    left: 141,
    height: 18,
    width: 18,
  },
  heartIcon2: {
    top: 303,
  },
  heartIcon3: {
    top: 586,
  },
  cottonQueenT: {
    top: 541,
    left: 50,
  },
  cottonQueenT2: {
    top: 841,
    left: 50,
  },
  greyTShirt: {
    top: 766,
    left: 220,
  },
  text1: {
    top: 566,
    left: 50,
  },
  text2: {
    top: 508,
    left: 230,
  },
  text3: {
    top: 791,
    left: 220,
  },
  text4: {
    top: 865,
    left: 50,
  },

  homeChildLayout: {
    height: 190,
    left: 220,
    width: 152,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  homeChild3Layout: {
    height: 40,
    width: 40,
    left: 155,
    position: "absolute",
  },
  homeChildPosition: {
    left: 330,
    height: 40,
    width: 40,
    position: "absolute",
  },
  heartIconLayout: {
    height: 18,
    width: 18,
    position: "absolute",
    overflow: "hidden",
  },

  heartIconLayout1: {
    height: 18,
    width: 18,
    left: 165,
    position: "absolute",
    overflow: "hidden",
  },
  heartIconPosition: {
    left: 340,
    height: 18,
    width: 18,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  searchPosition: {
    opacity: 0.2,
    position: "absolute",
  },
  iconLayout: {
    top: 215,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  homeInnerLayout: {
    width: 152,
    borderRadius: Border.br_mini,
    left: 44,
    position: "absolute",
  },
  homeitem2: {
    top: 270,

    position: "absolute",
  },
  // menuNav: {
  //   top: 834,
  //   borderTopLeftRadius: Border.br_xl,
  //   borderTopRightRadius: Border.br_xl,
  //   backgroundColor: Color.colorWhite,
  //   shadowColor: "rgba(0, 0, 0, 0.2)",
  //   shadowRadius: 24,
  //   elevation: 24,
  //   height: 62,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   paddingHorizontal: Padding.p_11xl,
  //   paddingTop: Padding.p_xl,
  //   paddingBottom: Padding.p_11xl,
  //   left: 0,
  //   shadowOpacity: 1,
  //   shadowOffset: {
  //     width: 0,
  //     height: 4,
  //   },
  // },
  // menuNavLayout: {
  //   width: 414,
  //   position: "absolute",
  // },
  // homeParent: {
  //   flexDirection: "row",
  // },
  // homeIcon: {
  //   height: 24,
  //   width: 24,
  //   overflow: "hidden",
  // },
  // iconLayout3: {
  //   marginLeft: 49,
  //   height: 24,
  //   width: 24,
  // },
  // heartIcon3: {
  //   overflow: "hidden",
  // },
  bottomNavChild: {
    top: -5,
  },
  TopLayout: {
    height: 90,
    width: 490,
    left: -40,
    position: "absolute",
    zIndex: 1,
    top: 0,
  },
  TopLayout2: {
    height: 100,
    width: 460,
    position: "absolute",
    zIndex: 0,
    top: "50%",
    left: "50%",
    transform: [{ translateX: -230 }, { translateY: -50 }],
  },

  TopNavChild2: {
    top: 10,
  },
  notificationIcon4: {
    top: 15,
    left: 285,
  },
  homeIcon1: {
    left: 20,
    top: 15,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  heartIcon1: {
    left: 110,
    top: 15,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  BagIcon1: {
    left: 200,
    top: 15,
    height: 24,
    width: 24,
    overflow: "hidden",
  },

  profileIcon: {
    left: 370,
    top: 15,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  home5: {
    left: 18,

    color: Color.colorLightsalmon,
  },
  bottomNavItem: {
    top: 834,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 24,
    elevation: 24,
    height: 62,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_11xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_11xl,
    left: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  hearttxt: {
    left: 110,

    color: Color.colorBlack,
  },
  notificationtxt: {
    left: 272,
    color: Color.colorBlack,
  },
  bagtxt: {
    left: 190,
    color: Color.colorBlack,
  },
  profile: {
    left: 370,
    color: Color.colorBlack,
  },
  bottomNav: {
    top: 690,
    left: -82,
  },
  bottomLayout: {
    height: 144,
    width: 539,
    position: "absolute",
    bottom: 0,
  },
  home1Typo: {
    textAlign: "center",
    fontSize: FontSize.size_xs,
    top: 40,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout5: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  heartIconLayout5: {
    height: 18,
    width: 18,
    position: "absolute",
    overflow: "hidden",
  },
});

export default Home;
