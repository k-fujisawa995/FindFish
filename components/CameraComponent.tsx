import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";

class CameraComponent extends React.Component {
  state = {
    image: null,
  };


  onClickCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false
    });
    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };


  onClickPickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    let { image } = this.state;

    return (
      <View>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onClickPickImage}>
          <Text style={{ color: "white", textAlign: "center", }}> カメラロールから選択 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onClickCamera}>
          <Text style={{ color: "white", textAlign: "center", }}> 写真を撮る </Text>
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

export default CameraComponent;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#1e3f4f",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#87cefa",
    width: 200,
    marginBottom: 20,
  },
  gazoBox: {
    height: 200,
    width: 200,
    backgroundColor: "#ffffff",
    marginBottom: 20,
  },
});
