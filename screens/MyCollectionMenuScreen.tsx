import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

const MyCollectionMenuScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          alignItems: "center", justifyContent: "center", width: "100%",
          height: "100%",
        }}
        source={require('../assets/background.png')}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("MyCollectionRegisterScreen")}>
          <Text style={{ color: "white", textAlign: "center", }}> マイコレクションに</Text>
          <Text style={{ color: "white", textAlign: "center", }}> 登録する </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("MyCollectionListScreen")}>
          <Text style={{ color: "white", textAlign: "center", }}> マイコレクション一覧 </Text>
        </TouchableOpacity>
        <Footer />
      </ImageBackground>
    </View>
  );
};

export default MyCollectionMenuScreen;

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
