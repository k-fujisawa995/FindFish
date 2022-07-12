import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
  ScrollView,
  ImageBackground
} from "react-native";
import PickImageComponent from "../components/PickImageComponent";
import DatePickerComponent from "../components/DatePickerComponent";
import TackleSelectComponent from "../components/TackleSelectComponent";

const MyCollectionRegisterScreen = () => {
  const [place, setPlace] = useState("");
  const [name, setName] = useState("");
  const [length, setLength] = useState("");
  const [weight, setWeight] = useState("");
  const [bait, setbBait] = useState("");
  const [tackle, setTackle] = useState("");
  const [comment, setComment] = useState("");

  const onPlaceChangetext = (value: string) => {
    setPlace(value);
  };

  const onNameChangetext = (value: string) => {
    setName(value);
  };

  const onlengthChangetext = (value: string) => {
    setLength(value);
  };

  const onWeightChangetext = (value: string) => {
    setWeight(value);
  };

  const onBaitChangetext = (value: string) => {
    setbBait(value);
  };

  const onTackleChangetext = (value: string) => {
    setTackle(value);
  };

  const onsetCommentChangetext = (value: string) => {
    setComment(value);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          style={{
            alignItems: "center", justifyContent: "center", width: "100%",
            height: "100%",
          }}
          source={require('../assets/background.png')}>
          <PickImageComponent />
          <DatePickerComponent />
          <Text style={{ marginRight: 270, color: "#1e3f4f" }}>場所</Text>
          <TextInput
            style={styles.input}
            onChangeText={onPlaceChangetext}
            value={place}
          />
          <Text style={{ marginRight: 250, color: "#1e3f4f" }}>魚の名前</Text>
          <TextInput
            style={styles.input}
            onChangeText={onNameChangetext}
            value={name}
          />
          <Text style={{ marginRight: 270, color: "#1e3f4f" }}>体長</Text>
          <TextInput
            style={styles.input}
            onChangeText={onlengthChangetext}
            value={length}
          />
          <Text style={{ marginRight: 270, color: "#1e3f4f" }}>重さ</Text>
          <TextInput
            style={styles.input}
            onChangeText={onWeightChangetext}
            value={weight}
          />
          <Text style={{ marginRight: 270, color: "#1e3f4f" }}>エサ</Text>
          <TextInput
            style={styles.input}
            onChangeText={onBaitChangetext}
            value={bait}
          />
          <Text style={{ marginRight: 260, color: "#1e3f4f" }}>仕掛け</Text>
          <TextInput
            style={styles.input}
            onChangeText={onTackleChangetext}
            value={tackle}
          />
          <Text style={{ marginRight: 250, color: "#1e3f4f" }}>コメント</Text>
          <TextInput
            style={styles.commentInput}
            onChangeText={onsetCommentChangetext}
            value={comment}
          />
          <TackleSelectComponent />
          <TouchableOpacity style={styles.buttonStyle}
            onPress={() => Alert.alert("登録", "登録が完了しました。")}
          >
            <Text style={{ color: "white", textAlign: "center", }}> 登録 </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </ScrollView>


  );
};

export default MyCollectionRegisterScreen;

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
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  commentInput: {
    height: 100,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#ffffff",
  },
});
