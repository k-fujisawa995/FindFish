import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


function TopScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ alignItems: "center", width: "100%", height: "100%" }}
        source={require("../assets/background.png")}
      >
        <Image
          style={{ width: 320, height: 150 }}
          source={require("../assets/findfish.png")}
          resizeMode="contain"
        />
        <Image
          style={{ width: 278, height: 245 }}
          source={require("../assets/fish.png")}
        />
        <TouchableOpacity
          style={styles.buttonLoginStyle}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
            {" "}
            ログインする{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRegisterStyle}
          onPress={() => navigation.navigate("NewRegisterScreen")}
        >
          <Text style={{ color: "#1e3742", textAlign: "center" }}>
            利用規約に同意して
          </Text>
          <Text style={{ color: "#1e3742", textAlign: "center", fontSize: 18, fontWeight: "bold" }}>
            FIND FISHをはじめる
          </Text>
        </TouchableOpacity>
        <View style={{ alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              ボタンをタップすると
            </Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: "white" }}>
              <Text
                style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
                onPress={() =>
                  Linking.openURL("https://t-cosmos.co.jp/privacy-policy/")
                }
              >
                利用規約
              </Text>
            </View>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>、</Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: "white" }}>
              <Text
                style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
                onPress={() =>
                  Linking.openURL("https://t-cosmos.co.jp/privacy-policy/")
                }
              >
                プライバシーポリシー
              </Text>
            </View>
          </View>
          <Text
            style={{ color: "white", alignSelf: "flex-start", fontSize: 15, fontWeight: "bold" }}
          >
            に同意したことになります。
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default TopScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#87cefa",
    alignItems: "center",
  },
  buttonRegisterStyle: {
    backgroundColor: "rgba(255,255,255,0.6)",
    padding: 6,
    borderRadius: 30,
    width: 250,
    marginBottom: 15,
  },
  buttonLoginStyle: {
    backgroundColor: "#1e3f4f",
    padding: 18,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#006699",
    width: 250,
    marginBottom: 15,
  },
});
