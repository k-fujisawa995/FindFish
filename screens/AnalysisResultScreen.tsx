import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "0",
    title: "ゴマサバ",
    parcent: "70%",
    sakanaimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4m0Og-pGpzmUOADg1NSfpyxAFsiZUA2EoBg&usqp=CAU",
  },
  {
    id: "1",
    title: "マサバ",
    parcent: "60%",
    sakanaimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTcqVl4acJWdzpk24bW7GH0TGNH1JEId_y-Q&usqp=CAU",
  },
  {
    id: "2",
    title: "マダイ",
    parcent: "50%",
    sakanaimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsseMkx-TpK9V3xxn0pmINwEyhQbVVJ4dczA&usqp=CAU",
  },
  {
    id: "3",
    title: "カサゴ",
    parcent: "40%",
    sakanaimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XYPsmz-6qLurN5N4tkKvK7PwVAhPBzAIsg&usqp=CAU",
  },
];

const analysisImage: string =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4m0Og-pGpzmUOADg1NSfpyxAFsiZUA2EoBg&usqp=CAU";

const AnalysisMenuScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* 背景 */}
      <ImageBackground
        style={styles.backgroundStyle}
        source={require("../assets/background.png")}
      >
        <ScrollView>
          {/* <CameraComponent /> */}

          {/* 解析写真表示エリア */}
          <View style={styles.analysisDispArea}>
            {/* 解析写真 */}
            <Image
              style={{ height: "90%", width: "90%" }}
              resizeMode="contain"
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4m0Og-pGpzmUOADg1NSfpyxAFsiZUA2EoBg&usqp=CAU",
              }}
            />
            {/* 解析したよ */}
            <Image
              style={{
                position: "absolute",
                top: "-4%",
                left: "-2%",
                height: "20%",
                width: "55%",
              }}
              resizeMode="contain"
              source={require("../assets/title_kaisekisitayo.svg")}
            />
          </View>
          {/* 解析結果!表示エリア */}
          <View style={styles.analysisTitleDispArea}>
            {/* 解析結果! */}
            <Image
              style={{
                height: "80%",
                width: "80%",
                marginTop: "5%",
              }}
              resizeMode="stretch"
              source={require("../assets/title_kaisekikekka.svg")}
            />
          </View>
          {/* 解析詳細表示エリア */}
          <View style={styles.analysisDetailDispArea}>
            {/* 解析結果写真 */}
            <Image
              style={{
                height: 180,
                width: "70%",
              }}
              resizeMode="contain"
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTcqVl4acJWdzpk24bW7GH0TGNH1JEId_y-Q&usqp=CAU",
              }}
            />
            {/* 一番似ている魚 */}
            <View style={styles.analysisSakana}>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                  似ている度
                </Text>
                <View style={styles.parcentStyle}>
                  <Text style={{ color: "white" }}>80%</Text>
                </View>
              </View>
              <View style={{ width: "100%" }}>
                <Text style={styles.analysisSakanaTitle}>
                  ヒイラギ
                  <Text style={styles.analysisSakanaTitleKamo}> かも!</Text>
                </Text>
              </View>
              <Image
                style={{
                  position: "absolute",
                  top: "30%",
                  left: "65%",
                  height: "45%",
                  width: "55%",
                  opacity: 0.6,
                }}
                resizeMode="contain"
                source={require("../assets/arrow_icon.png")}
              />
            </View>

            {/* マイコレクションに登録ボタン */}
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate("MyCollectionRegisterScreen")}
            >
              <Text style={styles.buttonText}>ヒイラギで</Text>
              <Text style={styles.buttonText}>マイコレクションに登録</Text>
            </TouchableOpacity>

            {/* 二番目以降の似ている魚リスト */}
            <FlatList
              style={{ width: "100%" }}
              data={DATA}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <Image
                    source={{ uri: item.sakanaimage }}
                    style={{ width: 160, height: 90, marginLeft: 5 }}
                  />
                  <View style={{ width: "55%" }}>
                    <View>
                      <Text style={{ marginLeft: 10 }}>
                        似ている度 {item.parcent}
                      </Text>
                      <View>
                        <Text style={styles.listTitle}>
                          {item.title}{" "}
                          <Text style={styles.listTitleKamo}> かも</Text>
                        </Text>
                      </View>
                      <Image
                        style={{
                          position: "absolute",
                          top: "30%",
                          left: "65%",
                          height: "35%",
                          width: "45%",
                          opacity: 0.7,
                        }}
                        resizeMode="contain"
                        source={require("../assets/arrow_icon.png")}
                      />
                    </View>
                    {/* マイコレクションに登録ボタン */}
                    <TouchableOpacity
                      style={styles.listButtonStyle}
                      onPress={() =>
                        navigation.navigate("MyCollectionRegisterScreen")
                      }
                    >
                      <Text style={styles.buttonTextSub}>
                        この魚でマイコレクションに登録
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default AnalysisMenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87cefa",
  },
  backgroundStyle: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
  },
  analysisDispArea: {
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    width: "84%",
    backgroundColor: "#ffffff",
    marginTop: "15%",
    marginBottom: 15,
    marginRight: "8%",
    marginLeft: "8%",
  },
  analysisTitleDispArea: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: "40%",
    backgroundColor: "#ffffff",
    marginLeft: "8%",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  analysisDetailDispArea: {
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    width: "100%",
    backgroundColor: "#ffffff",
    paddingTop: 10,
  },
  parcentStyle: {
    backgroundColor: "#165e83",
    height: 38,
    width: 38,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  analysisSakana: {
    paddingLeft: 20,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "auto",
    marginTop: 10,
  },
  analysisParcent: {
    backgroundColor: "#87cefa",
  },
  analysisSakanaTitle: {
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  analysisSakanaTitleKamo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonStyle: {
    backgroundColor: "#1e3f4f",
    padding: 5,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#87cefa",
    width: "70%",
    height: 60,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: "center",
  },
  listButtonStyle: {
    backgroundColor: "#1e3f4f",
    padding: 5,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#87cefa",
    width: "98%",
    height: "auto",
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonTextSub: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  listItem: {
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: "#d8e9f0",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 100,
    position: "relative",
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  listTitleKamo: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
