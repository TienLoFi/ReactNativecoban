import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";

const Background = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/screen/homepage/Rectangle1.png")}
        style={styles.Img1}
      />
      <Image
        source={require("../../assets/screen/homepage/Rectangle2.png")}
        style={styles.Img1}
      />
      <Image
        source={require("../../assets/screen/homepage/Rectangle3.png")}
        style={styles.Img3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Đảm bảo thành phần sử dụng toàn bộ không gian màn hình
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "center", // Căn giữa theo chiều ngang
  },
  Img1: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  Img3: {
    position: "absolute",
    top: 680,
    left: 0,
  },
});
export default Background;
