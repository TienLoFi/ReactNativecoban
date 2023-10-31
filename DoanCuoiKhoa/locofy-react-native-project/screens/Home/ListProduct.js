import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import { FontFamily, Color, FontSize, Border, Padding } from "../../GlobalStyles";


const ListProduct = ({ navigation }) => {



const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
          <TouchableOpacity    onPress={() => navigation.navigate('Bag')}>
            
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



//   const[clothes,setClothes]=useState([]);
  
//     const getAPI=async ()=>{
//       try{
//         const response=await fetch ('https://6539d4cce3b530c8d9e8ba78.mockapi.io/clothes');
//         const data=await response.json();
//         setClothes(data)
//       }
//      catch (error) {
//       console.log(error);
//     }}
//     useEffect(()=>{
// getAPI();

//     },[]);
  return (
    <View style={styles.container}>
   
  
      <SafeAreaView >
      <SectionList
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
          </SafeAreaView>

    </View>
  );
};

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
  // {
  //   title: 'Based on your recent listening',
  //   data: [
  //     {
  //       key: '1',
  //       text: 'Item text 1',
  //       uri: 'https://picsum.photos/id/1020/200',
  //     },
  //     {
  //       key: '2',
  //       text: 'Item text 2',
  //       uri: 'https://picsum.photos/id/1024/200',
  //     },

  //     {
  //       key: '3',
  //       text: 'Item text 3',
  //       uri: 'https://picsum.photos/id/1027/200',
  //     },
  //     {
  //       key: '4',
  //       text: 'Item text 4',
  //       uri: 'https://picsum.photos/id/1035/200',
  //     },
  //     {
  //       key: '5',
  //       text: 'Item text 5',
  //       uri: 'https://picsum.photos/id/1038/200',
  //     },
  //   ],
  // },
];

const styles = StyleSheet.create({
  container: {
   
      backgroundColor: "transparent",
      flex: 1,
      width: "100%",
right:8,
      overflow: "hidden",
      justifyContent:"space-between"

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
export default ListProduct;