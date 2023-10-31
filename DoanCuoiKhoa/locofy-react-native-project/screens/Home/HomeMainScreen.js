import { StatusBar } from "expo-status-bar";
import React from "react";
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
  TouchableOpacity
} from "react-native";
import { FontFamily, Color, FontSize, Border, Padding } from "../../GlobalStyles";
import ListCategory from "./ListCategory";
import ListProduct from "./ListProduct";
import { NavigationContainer } from '@react-navigation/native';


const SECTIONS = [
 
  {
    title: 'Sản Phẩm',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1011/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/1012/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1013/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1015/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1016/200',
      },
    ],
  },

];
const HomeMainScreen = ({navigation}) => {
  const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
            <TouchableOpacity    onPress={() => navigation.navigate('Details')}>
              
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        </TouchableOpacity>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    );
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.TopNav}>
        <Image
          style={[styles.TopNavChild, styles.TopLayout]}
          contentFit="cover"
          source={require("../../assets/icons/MenuNav.png")}
        />
        <Text style={[styles.delivery, styles.homelayout, styles.popularTypo1]}>
          Gym Clothes
        </Text>
      </View>

      <Image
        style={styles.homeChild}
        contentFit="cover"
        source={require("../../assets/icons/ellipse-1.png")}
      />
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Image
        style={styles.menu1Icon}
        contentFit="cover"
        source={require("../../assets/icons/menu-1.png")}
      />
</TouchableOpacity>
      <SafeAreaView style={{ flex: 0.24, marginHorizontal: 20, top: 100 }}>
        <TextInput
          placeholder="Tìm Kiếm..."
          clearButtonMode="always"
          style={styles.searchBox}
          autoCorrect={false}
          
          // underlineColorAndroid="#747070"
          // value={searchQuery}
          // onChangeText={query => handleSearch(query)}
        />
      </SafeAreaView>

      <SafeAreaView style={{ flex: 1,zIndex:1, }}>
        
        <ScrollView>
          <ListCategory />

          <SectionList style={{right:8,}}
          contentContainerStyle={{ paddingHorizontal:10}}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          scrollEnabled={false}

          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                columnWrapperStyle={styles.row}
                numColumns={2}
                  data={section.data}
                  renderItem={({ item }) => 
                  <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
          maxToRenderPerBatch={10} 
          windowSize={10}
        />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
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
    left: 130,
    position: "absolute",
    zIndex: 1,
  },
  delivery: {
    fontSize: 26,
    color: "#ff591d",
  },

  popularTypo1: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "center",

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
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
  },
  sectionHeader: {
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 5,
    left:5,
  },
  item: {
   marginHorizontal:10,
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
