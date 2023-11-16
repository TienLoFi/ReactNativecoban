import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";
// import OrderItem from "../api/ItemHome1";
import { GET_ALL, GET_IMG } from '../api/apiService';
import { v4 as uuidv4 } from "uuid";
import { getRandomBase64 } from 'react-native-get-random-values';
function OrderScreen({ route, navigation }) {
  const { coffee, quantity  } = route.params;
  const [total, totalPrice] = useState(coffee.price);
  // const [quantity, setQuantity] = useState(1);
  const [coffeeData, setCoffeeData] = useState([]);
  useEffect(() => {
    if (route.params && route.params.coffee) {
      handleAddCoffee(route.params.coffee);
    }
  }, [route.params]);
  const handleAddCoffee = (coffee) => {
    if (coffee) {
      coffee.key = uuidv4();
      setCoffeeData((prevData) => [...prevData, coffee]);
    }
  };
  const handleDeleteCoffee = (data, rowMap) => {
    rowMap[data.item.key].closeRow(); // Đóng hàng đã được mở ra
    setCoffeeData((prevData) => prevData.filter((item, i) => item.key !== data.item.key));
  };
  const handleNext = () => {
    navigation.navigate("ScreenOrderd", {});
  };
  const totalSum = coffeeData.reduce((sum, coffeeData) => sum + coffeeData.total, 0);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>My Order</Text>
      </View>
      <View style={styles.content}>
        <SwipeListView
          data={coffeeData}
          renderItem={(data, rowMap) => (
            <View key={data.item.key}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: GET_IMG("products", coffee.photo),
                  }}
                  style={styles.image}
                  resizeMode="contain"
                />
              <View style={{flexDirection:"clums",
              marginLeft: "3%",
                  marginTop: "3%",
                  fontWeight: "bold",
                  fontSize: 18
              }}>
                <Text style={{
                  // marginLeft: "3%",
                  // marginTop: "3%",
                  fontWeight: "bold",
                  fontSize: 18
                }}>{coffee.title}
                </Text>
                
                <Text style={{
                  // marginLeft:"-22%",
                  marginTop:"1%",
                  // fontSize: 14
                }}>{coffee.description}
                </Text>
                <Text style={{
                  marginLeft:"40%",
                  marginTop: "-2%",
                  fontWeight: "bold",
                  fontSize: 21
                }}>BYN {coffee.price}
                </Text>
                <Text style={{
                  // marginLeft:"-57%",
                  marginTop: "-3%",
                  fontSize: 14,
                  fontWeight: "bold",
                }}>X{quantity}</Text>
                </View>
                
              </View>
            </View>
          )}
          renderHiddenItem={(data, rowMap) => (
            <TouchableOpacity
              style={styles.rightAction}
              onPress={() => {
                handleDeleteCoffee(data, rowMap);
              }}
            >
              <View style={styles.BTNrightAction}>
                <AntDesign style={{ marginTop: 35 }} name="delete" size={50} color="#fff" />
              </View>
            </TouchableOpacity>
          )}
          rightOpenValue={-75}
          keyExtractor={(item) => item.key}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.price}>
          <Text style={styles.totalPrice}>Total Price</Text>
          <Text style={styles.byn900}>BYN {totalSum}</Text>
        </View>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            handleNext();
          }}
        >
          <View style={styles.button}>
            <Ionicons name="cart-outline" size={25} color="#FFF" />
            <Text style={styles.next}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default OrderScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%",
  },
  title: {
    marginTop: "15%",
    fontWeight: "bold",
    fontSize: 32,
    marginLeft: "6%",
  },
  BTNrightAction: {
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#FF9999",
    overflow: "hidden",
    height: "77%",
    marginLeft: "81%",
    width: "19%",
    marginTop:"7.7%",
  },
  next: {
    fontSize: 14,
    lineHeight: 23,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
  button: {
    borderRadius: 30,
    backgroundColor: "#324a59",
    height: "60%",
    width: "70%",
    marginHorizontal: 15,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginRight: "10%",
    marginLeft:"25%"
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: "auto",
    height:"12%",
  },
  price: {
    marginTop: "-5%",
    alignItems: "center",
    marginLeft: "10%",
  },
  totalPrice: {
    marginRight: "5%",
    fontSize: 17,
    fontWeight: "600",
    fontWeight: "bold",
  },
  byn900: {
    fontSize: 16,
    fontWeight: "bold",
  },
  rightAction: {
    marginLeft: -1,
  },
  imageContainer: {
    // flexDirection: "column",
    flexWrap: "wrap",
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#FFE4E1",
    overflow: "hidden",
    marginLeft: 1,
    height: 135,
    marginTop:30
  },
  image: {
    width: 140,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingTop: 10,
    marginLeft: -6,
    marginHorizontal: "auto",
    marginTop: -15
  },
});

