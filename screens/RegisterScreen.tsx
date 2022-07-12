import React from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          alignItems: "center", justifyContent: "center", width: "100%",
          height: "100%"
        }}
        source={require('../assets/background.png')}>
        <Text style={{ marginBottom: 50, }}>登録が完了しました。</Text>
        <TouchableOpacity style={styles.buttonTopStyle} onPress={() => navigation.navigate("TopScreen")}>
          <Text style={{ color: "white", textAlign: "center", }}>TOPへ戻る</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#87cefa",
    alignItems: "center",
  },
  buttonTopStyle: {
    backgroundColor: "#1e3f4f",
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#006699",
    width: 250,
  },
});
