import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [mail, setMail] = useState("");
  const [password, setPassWord] = useState("");

  const onMailChangetext = (value: string) => {
    setMail(value);
  };

  const onPassWordChangetext = (value: string) => {
    setPassWord(value);
  };

  const navigation = useNavigation();

  const [borderColor1, setBoderColor1] = React.useState("#ddd");
  const [borderColor2, setBoderColor2] = React.useState("#ddd");
  const [isSecure, setPassword] = useState(true);

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
              <Text style={{
                marginRight: 200, color: "#1e3f4f", fontWeight: "bold",
                fontSize: 18, fontStyle: "normal", fontFamily: "HelveticaNeue-BoldItalic",
              }}>
                メールアドレス
              </Text>
              <TextInput
                onChangeText={onMailChangetext}
                value={mail}
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
                  marginRight: 230,
                  color: "#1e3f4f",
                  fontWeight: "bold",
                  fontSize: 18,
                  fontFamily: "HelveticaNeue-BoldItalic",
                }}
              >
                パスワード
              </Text>
              <View style={styles.passSection}>
                <TextInput
                  onFocus={() => setBoderColor2("blue")}
                  onBlur={() => setBoderColor2("#ddd")}
                  style={{
                    height: 40,
                    width: 330,
                    margin: 0,
                    borderWidth: 1,
                    padding: 0,
                    backgroundColor: "#ffffff",
                    borderRadius: 6,
                    borderColor: borderColor2,
                  }}
                  secureTextEntry={isSecure ? true : false}
                  onChangeText={onPassWordChangetext}
                  value={password}
                  placeholder={"パスワードを入力"}
                  placeholderTextColor={"blue"}
                ></TextInput>
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    right: 5,
                  }}
                  onPress={() => setPassword(!isSecure)}
                >
                  <Image
                    style={styles.iconImage}
                    source={require("../assets/fish_fugu_haku.png")}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("MenuScreen")}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  {" "}
                  ログイン{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87cefa",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  passIcon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    opacity: 0.3,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
  iconImage: {
    width: "50%",
    height: "50%",
    padding: 14,
    alignItems: "center",
  },
  passSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  buttonStyle: {
    backgroundColor: "#1e3f4f",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#87cefa",
    width: 200,
    marginTop: 10,
  },
  password: {
    height: 40,
    width: 330,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 6,
    borderColor: "#ddd",
  },
});
