import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

class PickImageComponent extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    const onClickPickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      console.log(result);

      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    };

    return (
      <View>
        <TouchableOpacity style={styles.buttonStyle} onPress={onClickPickImage}>
          <Text style={{ color: "white", textAlign: "center", }}> カメラロールから選択 </Text>
        </TouchableOpacity>
        <View style={styles.gazoBox}>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
      </View>
    );
  }
}

export default PickImageComponent;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#1e3f4f",
    color: "white",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#87cefa",
    width: 200,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  gazoBox: {
    height: 200,
    width: 200,
    backgroundColor: "#ffffff",
    marginBottom: 20,
  },
});
