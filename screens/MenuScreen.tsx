import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

const MenuScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
        source={require("../assets/background.png")}
      >
        <Image
          style={{ width: 320, height: 150, position: "absolute", top: 0 }}
          source={require("../assets/title_shitemiyo.png")}
        />
        <Image
          style={{ width: 278, height: 245, margin: 30 }}
          source={require("../assets/img_fisshing.png")}
        />

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("AnalysisMenuScreen")}
        >
          <Image
            style={{ width: 35, height: 35 }}
            source={require("../assets/icn_camera.png")}
          />
          <Text style={{ color: "white", textAlign: "center" }}>
            {" "}
            写真から名前を解析する{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.collectionbuttonStyle}
          onPress={() => navigation.navigate("MyCollectionMenuScreen")}
        >
          <Text style={{ color: "#1e3f4f", textAlign: "center", }}>
            {" "}
            お魚の名前から検索する{" "}
          </Text>
        </TouchableOpacity>
        <Footer />
      </ImageBackground >
    </View >
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#87cefa",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#1e3f4f",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    borderRadius: 30,
    width: 250,
    marginBottom: 10,
  },
  collectionbuttonStyle: {
    backgroundColor: "rgba(255,255,255,0.5)",
    alignItems: "center",
    padding: 15,
    borderRadius: 30,
    width: 250,
    marginBottom: 10,
  },
});
