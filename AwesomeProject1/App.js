import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import LoginScreen from "./src/View/loginScreen";
import HomePage from "./src/View/HomePage";
import Register from "./src/View/Register";
import Background from "./src/View/background";
export default function App() {
  return (
    <View style={styles.containeer}>
      {/* <LoginScreen />  */}
      <HomePage/>
      {/* <Register /> */}
      {/* <Background/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  containeer: {
    flex: 1,
  },
});
