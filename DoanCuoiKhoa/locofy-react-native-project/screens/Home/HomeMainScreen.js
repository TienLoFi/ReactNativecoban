import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
} from "react-native";
import {
  FontFamily,
  Color,
  FontSize,
  Border,
  Padding,
} from "../../GlobalStyles";
import ListCategory from "./ListCategory";
import Icon from "@expo/vector-icons/Ionicons";
import { GET_ALL, GET_IMG } from "../../api/apiService";
import ProductItem from "./ProductItem";
import Title from "../../components/Title";

import { NavigationContainer } from "@react-navigation/native";
const toggleTitleVisibility = () => {
  setTitleVisible(!isTitleVisible);
};
const HomeMainScreen = ({ navigation }) => {
  // const handleImagePress = (id) => {
  //   navigation.navigate("Details");
  // };
  const [carData, setCarData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Use the GET ALL function to fetch data from your API
    GET_ALL("products")
      .then((response) => {
        const responseData = response.data;
        if (responseData && Array.isArray(responseData.content)) {
          setCarData(responseData.content); // Update the state with the "content" array
        } else {
          console.error(
            "Data received from the API is not in a supported format."
          );
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, []);
  //animation
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const pan = useRef(new Animated.ValueXY()).current;
  // const list = useRef(new Animated.ValueXY()).current;

  // useEffect(function () {
  //   const getData = async () => {
  //     const resp = await fetch(URL);
  //     const data = await resp.json();
  //     setData(data);
  //     setLoading(false);
  //   };
  //   getData();

  //   Animated.timing(pan, {
  //     toValue: { x: -400, y: 0 },
  //     delay: 1000,
  //     useNativeDriver: false,
  //   }).start();

  //   Animated.timing(list, {
  //     toValue: { x: 0, y: -300 },
  //     delay: 2000,
  //     useNativeDriver: false,
  //   }).start();
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.TopNav}>
        <Image
          style={[styles.TopNavChild, styles.TopLayout]}
          contentFit="cover"
          source={require("../../assets/icons/MenuNav.png")}
        />
        <Text style={[styles.delivery, styles.homelayout, styles.popularTypo1]}>
          T Super
        </Text>
      </View>

      <Image
        style={styles.homeChild}
        contentFit="cover"
        source={require("../../assets/icons/ellipse-1.png")}
      />

      <SafeAreaView style={{ flex: 0.25, marginHorizontal: 20, top: 100 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",

            marginVertical: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              elevation: 2,
              width: "85%",
              backgroundColor: "#FFF",
              paddingHorizontal: 20,
              marginLeft: 2,
              height: 45,
              borderRadius: 10,

              top: -30,
            }}
          >
            <Icon
              name="ios-search"
              size={22}
              color="#4f4a4a"
              style={{ marginRight: 10 }}
            />
            <TextInput placeholder="Tìm Kiếm..." />
          </View>

          <View
            style={{
              alignItems: "center",
              elevation: 2,
              width: "15%",
              backgroundColor: "#FFF",
              marginLeft: 5,
              height: 45,
              borderRadius: 10,
              marginLeft: 1,
              justifyContent: "center",
              top: -30,
            }}
          >
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={require("../../images/sort.png")}
                style={{
                  width: 18,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {isLoading ? (
        <ActivityIndicator size="large" color="#ff591d" />
      ) : (
        <SafeAreaView style={{ flex: 1, zIndex: 1 }}>
          <ScrollView>
            <Title content="Thương Hiệu*"></Title>

            <ListCategory />

            <Title content="Sản Phẩm*"></Title>
            <FlatList
              scrollEnabled={false}
              data={carData} // Pass the data array to the FlatList
              keyExtractor={(item, index) => index.toString()} // Define a unique key
              numColumns={2} // Display items in two columns
              renderItem={({ item, index }) => (
                <View style={styles.content}>
                  {isLoading ? (
                    <ActivityIndicator size="large" color="#ff591d" />
                  ) : (
                    <TouchableOpacity
                      key={item.id}
                      style={{ marginBottom: 20, borderRadius: 15 }}
                      activeOpacity={0.0}
                      underlayColor="#FFF"
                      onPress={() => {
                        const updatedCoffee = { ...item, total: item.price };
                        navigation.navigate("Details", {
                          item: updatedCoffee,
                        });
                      }}
                    >
                      <ProductItem
                        key={index}
                        imageSource={GET_IMG("products", item.photo)}
                        textContent={item.title}
                        textPrice={item.price}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              )}
            />
          </ScrollView>
        </SafeAreaView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    paddingHorizontal: 16, // Adjust the padding as needed
  },
  container: {
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },

  ///
  homelayout: {
    top: 45,
    marginHorizontal: 140,
    position: "absolute",
    zIndex: 1,
  },
  delivery: {
    fontSize: 21,
    color: "#ff591d",
  },

  popularTypo1: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "right",

    position: "absolute",
  },

  TopLayout: {
    height: 90,
    width: 490,
    left: -40,
    position: "absolute",
    zIndex: 1,
    top: 0,
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

  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: 5,

    flexDirection: "row",
    alignIstems: "center",
    elevation: 2,
    width: "85%",
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    height: 45,
    borderRadius: 10,
    marginLeft: 1,
    top: -30,
  },
  sectionHeader: {
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 5,
    left: 5,
  },
  item: {
    marginHorizontal: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: "black",
    marginTop: 5,
  },
  slidersIcon: {
    left: 340,
    position: "absolute",
  },
  //
});
export default HomeMainScreen;
