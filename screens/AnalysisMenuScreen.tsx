import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import CameraComponent from "../components/CameraComponent";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";


const AnalysisMenuScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          alignItems: "center", justifyContent: "center", width: "100%",
          height: "100%",
        }}
        source={require('../assets/background.png')}>
        <CameraComponent />
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("AnalysisResultScreen")}>
          <Text style={{ color: "white", textAlign: "center", }}> 解析結果を見る </Text>
        </TouchableOpacity>
        <Footer />
      </ImageBackground>
    </View>
  );
}


export default AnalysisMenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#87cefa",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#1e3f4f",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#87cefa",
    width: 200,
    marginBottom: 10,
  },
});
