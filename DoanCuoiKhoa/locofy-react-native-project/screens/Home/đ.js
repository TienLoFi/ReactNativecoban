import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import InputSpinner from "react-native-input-spinner";
import { StyleSheet, Text, View, TouchableHighlight ,  StatusBar,TouchableOpacity,
  SafeAreaView,Dimensions} from "react-native";
import { FontFamily, FontSize, Color, Border } from "../../GlobalStyles";
import ItemOrder from "./Item";
import { SwipeListView } from "react-native-swipe-list-view";
import { v4 as uuidv4 } from "uuid";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight || 0; 
const { width,height } = Dimensions.get('window'); 
  const buttonSize = width * 0.06; 
  const buttonMargin = width * 0.03; 
  const buttonTop = height * 0.06; 
  const navigationBarHeight = Platform.OS === 'android' ? 56 : 44; 
  const paddingBottom = statusBarHeight + navigationBarHeight;

  function Bag({ route, navigation }) {
    const [carData, setCarData] = useState([]);
  
    useEffect(() => {
      if (route.params && route.params.item) {
        handleAddCar(route.params.item);
      }
    }, [route.params]);
  
    const handleAddCar = (item) => {
      if (item) {
        item.key = uuidv4();
        setCarData((prevData) => [...prevData, item]);
      }
    };
  
    const handleDeleteCar = (index) => {
      setCarData((prevData) => prevData.filter((item, i) => i !== index));
    };
  
    const handleNext = () => {
      // navigation.navigate("PayAndOrder", {
      // coffee: updatedCoffee,
      // });
    };
  
    const totalSum = carData.reduce((sum, carData) => sum + carData.total, 0);
  


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent={true}
    />
    <View style={[styles.bag, styles.bagLayout]}>
   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          top: buttonTop,
          borderWidth:1,
          padding: 5,
          borderRadius: buttonSize / 2, // Đặt bán kính của nút để tạo hình tròn
          marginLeft: buttonMargin,
          position: 'absolute',
        }}
      >
        <Image
          source={require('../../assets/icons/arrowleft.png')}
          style={{ width: buttonSize, height: buttonSize, tintColor: 'black' }}
        />
      </TouchableOpacity>
    </View> 
      <Text style={[styles.text, styles.textTypo4]}>{totalSum}</Text>
      <Text style={styles.giHng2}>Giỏ Hàng(2)</Text>
      <View style={[styles.chat42327931Parent, styles.chatIconPosition]}>
      <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}> 

        <Image
          style={styles.chat42327931Icon}
          contentFit="cover"
          source={require("../../assets/icons/chat-4232793-1.png")}
        />
        </TouchableOpacity>
        <View style={[styles.ellipseParent, styles.groupChildPosition]}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../../assets/icons/ellipse-2.png")}
          />
          <Text style={styles.text1}>2</Text>
        </View>
      </View>

      <SwipeListView
          data={carData}
          renderItem={(data, rowMap) => (
            <View key={data.item.key}>
              <ItemOrder item={data.item} />
            </View>
          )}
          renderHiddenItem={(data, rowMap) => (
            <TouchableOpacity
              style={styles.rightAction}
              onPress={() => {
                handleDeleteCar(data.index);
              }}
            >
              <View style={styles.BTNrightAction}>
                <AntDesign name="delete" size={26} color="#FFF" />
              </View>
            </TouchableOpacity>
          )}
          rightOpenValue={-75}
          keyExtractor={(item) => item.key}
        />

      <Text style={[styles.tngThanhTon, styles.ttCTypo]}>Tổng Thanh Toán : </Text>
      <Text style={[styles.ttC, styles.ttCTypo]}>Tất Cả</Text>

    
      <TouchableOpacity onPress={() => navigation.navigate('PayAndOrder')}> 
        <View style={styles.rectangleView} />
      </TouchableOpacity>
      <Text style={[styles.muaHng, styles.luTypo2]}>Mua Hàng</Text>

 

  
      
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.groupWrapper, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
          </View>
        </View>
        <Text style={[styles.nhpMGim, styles.ttCTypo]}>
          Nhập Mã Giảm Giá (Nếu Có)
        </Text>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Text style={[styles.lu, styles.luTypo1]}>Lưu</Text>

      </View>
      <Image
        style={[styles.lineIconn, styles.lineLayout]}
        contentFit="cover"
        source={require("../../assets/icons/line-1.png")}
      />
      <View style={[styles.lineView, styles.lineLayout]} />
      <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
        
      </View>
      <Image
        style={[styles.bagChild4, styles.bagChildLayout]}
        contentFit="cover"
        source={require("../../assets/icons/ellipse-26.png")}
      />
   <View
  style={[styles.bagChild6, styles.bagChildPosition]}>
  
</View>

        

    </View>
     
      
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  rightAction: {
    width:"100%",
    marginVertical:10,
    alignItems: "center",
    flex:1,
    justifyContent: "center",
height:60,

    backgroundColor: "#fff",
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity:0.25,
    shadowRadius:3.04,
    elevation:5,
   
  },
  BTNrightAction: {
    paddingHorizontal: 20,
  },
  bagLayout: {
    overflow: "hidden",
    width: "100%",
  },

  textTypo4: {
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
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
    fontWeight:"700",
  },
  bagChildLayout: {
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
    left:280,
  },
  bagChild3Layout: {
    height: 90,
    width: 150,
    left: "10%",
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  // text9Typo: {
  //   left: 200,
  //   fontSize: FontSize.size_sm,
  //   fontFamily: FontFamily.montserratRegular,
  //   fontWeight: "500",
  //   textAlign: "left",
  //   color: "#F3A932",
  //   position: "absolute",
  // },
  // priceTypo: {
  //   left: 200,
  //   fontSize: FontSize.size_sm,
  //   fontFamily: FontFamily.quicksandBold,
  //   fontWeight: "500",
  //   textAlign: "left",
  //   color: "#F3A932",
  //   position: "absolute",
  // },
  // NameTypo: {
  //   left: 200,
  //   fontSize: FontSize.size_base,
  //   fontFamily: FontFamily.montserratBold,
  //   fontWeight: "500",
  //   textAlign: "left",
  //   color: Color.colorBlack,
  //   position: "absolute",
  // },


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
    top: 500,
    left: 340,
    fontSize: 30,
    color: Color.colorLightsalmon,
    textAlign: "right",
    position: "absolute",
    zIndex:1,
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
    top: 510,
    zIndex: 1,
    left: 35,
  },
  ttC: {
    top: 555,
    left: 75,
  },
  bagChild: {
    left: 200,
    top: 284,
    height: 30,
    width: 30,
  },

  bagInner: {
    top: 229,
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

  text6: {
    top: 290,
  },
  text7: {
    top: 177,
  },
  rectangleView: {
    top: 548,
    left: 215,

    backgroundColor: Color.colorLightsalmon,
    width: 173,
    height: 45,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  muaHng: {
    left: 250,
    top: 555,
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
    top: "19%",
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
    top:409,
    left: 40,
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
    top:5,
    left: 250,
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
    top: 550,
  },
  bagChild5: {
    top: 265,
  },
  bagChild6: {
    top: 145,
  },
  bag: {
    backgroundColor: Color.colorWhite,
    flex:1,
    height: 812,

  },
//   content1: {
// top:"45%",
   
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
    
//   },
});

export default Bag;










