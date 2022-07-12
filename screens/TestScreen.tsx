import React, { useState } from "react";
import { StyleSheet, View, Text, } from "react-native";


const MyCollectionListScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.slide}>
          <Text style={styles.text}>First Page</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Second Page</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Third Page</Text>
        </View>
      </View>
    </View>
  );
};

export default MyCollectionListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87cefa",
    alignItems: "center",
    justifyContent: "center",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
