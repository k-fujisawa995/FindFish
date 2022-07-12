import React from "react";
import { StyleSheet, View, TouchableHighlight, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.Footer}>
      <TouchableHighlight
        underlayColor={"#9DD6EB"}
        onPress={() => navigation.navigate("MenuScreen")}>
        <Image style={{ width: 75, height: "100%" }}
          source={require("../assets/icn_home.png")} />
      </TouchableHighlight>
      <TouchableHighlight underlayColor={"#9DD6EB"}
        onPress={() => navigation.navigate("MyCollectionMenuScreen")}>
        <Image style={{ width: 75, height: "100%" }}
          source={require("../assets/icn_collection.png")} />
      </TouchableHighlight>
      <TouchableHighlight underlayColor={"#9DD6EB"}
        /*onPress={() => navigation.navigate("TestScreen")}*/>
        <Image style={{ width: 75, height: "100%" }}
          source={require("../assets/icn_chouka.png")} />
      </TouchableHighlight>
      <TouchableHighlight underlayColor={"#9DD6EB"}
        onPress={() => navigation.navigate("AnalysisMenuScreen")}>
        <Image style={{ width: 75, height: "100%" }}
          source={require("../assets/icn_name.png")} />
      </TouchableHighlight>
      <TouchableHighlight underlayColor={"#9DD6EB"}
        /*onPress={() => navigation.navigate("TestScreen")}*/>
        <Image style={{ width: 75, height: "100%" }}
          source={require("../assets/icn_tool.png")} />
      </TouchableHighlight>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  Footer: {
    height: 75,
    flexDirection: 'row',
    backgroundColor: "rgba(255,255,255,0.75)",
    position: "absolute",
    bottom: 0
  },
});
