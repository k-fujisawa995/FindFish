import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import DatePickerComponent from "../components/DatePickerComponent";


const DATA = [
      {
            id: "0",
            sakanaimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4m0Og-pGpzmUOADg1NSfpyxAFsiZUA2EoBg&usqp=CAU'
      },
      {
            id: "1",
            sakanaimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScgYkrSlt2wUf2L74XmWtORhjqzrhDtqbvmw&usqp=CAU'
      },
      {
            id: "2",
            sakanaimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsseMkx-TpK9V3xxn0pmINwEyhQbVVJ4dczA&usqp=CAU'
      },
      {
            id: "3",
            sakanaimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XYPsmz-6qLurN5N4tkKvK7PwVAhPBzAIsg&usqp=CAU'
      },
      {
            id: "4",
            sakanaimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJK8-Czi8bTT0tQgIWJpkZhEpZDh_3i57-A&usqp=CAU'
      },
      {
            id: "5",
            sakanaimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5fnqC82RHaaKZmubjsdAvIYb5PFbb94Ozw&usqp=CAU'
      },
      {
            id: "6",
            sakanaimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxtbJBzcy7O_m3In48FGJSVkZiAmf0lTxAaA&usqp=CAU'
      },
      {
            id: "7",
            sakanaimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStRBTT3HBOrsUjZHUCjoQlSXvzDhWcQC3PWQ&usqp=CAU'
      },
      {
            id: "8",
            sakanaimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7o0AB3Lu_lFdhgBMPVtbw07V6vBbSCXbPow&usqp=CAU'
      },
];
const MyCollectionListScreen = () => {
      const navigation = useNavigation();

      return (
            <View style={styles.container}>
                  <ImageBackground style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}
                        source={require('../assets/background.png')}>
                        <View style={{ flexDirection: "row", position: "absolute", top: 0 }}>
                              <Image style={{ width: 200, height: 75, position: "absolute", right: -30, top: 30 }}
                                    source={require("../assets/title_choukakekka.png")} resizeMode="contain" />
                              <Image style={{ width: 100, height: 180, position: "absolute", left: 80 }}
                                    source={require("../assets/img_mini_fishing.png")} resizeMode="contain" />
                        </View>
                        <View style={{ position: "absolute", left: 18, bottom: "68%" }}>
                              <DatePickerComponent />
                        </View>
                        <View style={styles.scrollcontainer}>

                              <ScrollView>
                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                          <Text style={{ fontSize: 20, fontWeight: "bold" }}>  場所  用宗フィッシャリーナ</Text>
                                          <TouchableOpacity style={styles.buttonstyle}>
                                                <Text style={{ color: "white", textAlign: "center", }}>編集</Text>
                                          </TouchableOpacity>
                                    </View>
                                    <View style={{ alignItems: "center" }}>
                                          <Image style={{ alignItems: "center", width: 340, height: 140, marginTop: 10 }}
                                                source={require("../assets/examplemap.png")} />
                                    </View>
                                    <Text style={{ fontSize: 20, marginTop: 10 }}>   コメント</Text>
                                    <Text style={{ fontSize: 20, marginTop: 20, fontWeight: "bold" }}>   今日の魚コレクション</Text>
                                    <View style={{ alignItems: "center" }}>
                                          <FlatList numColumns={3} data={DATA} renderItem={({ item }) => (
                                                <View>
                                                      <Image source={{ uri: item.sakanaimage }}
                                                            style={{ width: 120, height: 120, margin: 1 }} />
                                                </View>)} keyExtractor={(DATA) => DATA.id} />
                                    </View>
                              </ScrollView>
                        </View>
                  </ImageBackground>
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            width: "100%",
            height: "100%",
            backgroundColor: "#87cefa",
            justifyContent: "center",
      },
      scrollcontainer: {
            flex: 1,
            width: "100%",
            height: "70%",
            backgroundColor: "white",
            position: "absolute",
            bottom: 0
      },
      buttonstyle: {
            position: "absolute",
            right: 20,
            backgroundColor: "#1e3f4f",
            padding: 5,
            borderRadius: 20,
            width: 70

      }

});

export default MyCollectionListScreen;