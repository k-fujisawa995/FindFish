import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


const NewRegisterScreen = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassWord] = useState("");
  const [visible, setVisible] = useState(false);

  const onNameChangetext = (value: string) => {
    setName(value);
  };

  const onMailChangetext = (value: string) => {
    setMail(value);
  };

  const onPassWordChangetext = (value: string) => {
    setPassWord(value);
  };
  const navigation = useNavigation();

  const onPressAlert = () => {
    Alert.alert("確認", "会員登録を行います。よろしいですか？", [
      {
        text: "入力画面に戻る",
        onPress: () => setVisible(false),

        style: "cancel",
      },
      {
        text: "OK", onPress: () => {
          onPressRegister();
        }
      },
    ]);
  };
  const [borderColor1, setBoderColor1] = React.useState("#ddd");
  const [borderColor2, setBoderColor2] = React.useState("#ddd");
  const [borderColor3, setBoderColor3] = React.useState("#ddd");
  const onPressRegister = () => {
    (async () => {
      const items = { username: name, email: mail, password: password };
      const sql = "INSERT INTO users (username, email, password) VALUES (:username, :email, :password)";
    })()
      .then((result) => {
        console.dir(result);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("success");
    navigation.navigate("RegisterScreen");
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1, width: "100%", height: "100%" }}
        behavior="padding"
      >
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <ImageBackground
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
            source={require("../assets/background.png")}
          >
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  marginRight: 250,
                  color: "#1e3f4f",
                  fontWeight: "bold",
                  fontFamily: "HelveticaNeue-BoldItalic",
                }}
              >
                {" "}
                アカウント名{" "}
              </Text>
              <TextInput
                onChangeText={onNameChangetext}
                value={name}
                onFocus={() => setBoderColor1("blue")}
                onBlur={() => setBoderColor1("#ddd")}
                style={{
                  borderColor: borderColor1,
                  height: 40,
                  width: 330,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  backgroundColor: "#ffffff",
                  borderRadius: 6,
                }}
              />
              <Text
                style={{
                  marginRight: 210,
                  color: "#1e3f4f",
                  fontWeight: "bold",
                  fontFamily: "HelveticaNeue-BoldItalic",
                }}
              >
                {" "}
                メールアドレス{" "}
              </Text>
              <TextInput
                onChangeText={onMailChangetext}
                value={mail}
                onFocus={() => setBoderColor2("blue")}
                onBlur={() => setBoderColor2("#ddd")}
                style={{
                  borderColor: borderColor2,
                  height: 40,
                  width: 330,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  backgroundColor: "#ffffff",
                  borderRadius: 6,
                }}
              />
              <Text
                style={{
                  marginRight: 240,
                  color: "#1e3f4f",
                  fontWeight: "bold",
                  fontFamily: "HelveticaNeue-BoldItalic",
                }}
              >
                {" "}
                パスワード{" "}
              </Text>
              <TextInput
                onChangeText={onPassWordChangetext}
                secureTextEntry={true}
                value={password}
                onFocus={() => setBoderColor3("blue")}
                onBlur={() => setBoderColor3("#ddd")}
                style={{
                  borderColor: borderColor3,
                  height: 40,
                  width: 330,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  backgroundColor: "#ffffff",
                  borderRadius: 6,
                }}
              />
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={onPressAlert}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  登録
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default NewRegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87cefa",
    alignItems: "center",
    justifyContent: "center",
  },
  input1: {
    height: 40,
    width: 330,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 6,
    borderColor: "#ddd",
  },
  input2: {
    height: 40,
    width: 330,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 6,
    borderColor: "#ddd",
  },
  input3: {
    height: 40,
    width: 330,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 6,
    borderColor: "#ddd",
  },

  buttonStyle: {
    backgroundColor: "#1e3f4f",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#87cefa",
    width: 200,
  },
});
