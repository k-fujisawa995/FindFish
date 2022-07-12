import React from "react";
import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TopScreen from "./screens/TopScreen";
import NewRegisterScreen from "./screens/NewRegisterScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import MenuScreen from "./screens/MenuScreen";
import AnalysisMenuScreen from "./screens/AnalysisMenuScreen";
import AnalysisResultScreen from "./screens/AnalysisResultScreen";
import MyCollectionMenuScreen from "./screens/MyCollectionMenuScreen";
import MyCollectionRegisterScreen from "./screens/MyCollectionRegisterScreen";
import MyCollectionListScreen from "./screens/MyCollectionListScreen";
import TestScreen from "./screens/TestScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TopScreen">
        <Stack.Screen
          name="TopScreen"
          component={TopScreen}
          options={{ title: "トップ画面" }}
        />
        <Stack.Screen
          name="NewRegisterScreen"
          component={NewRegisterScreen}
          options={{ title: "新規会員登録" }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ title: "登録画面" }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "ログイン画面" }}
        />
        <Stack.Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{ title: "メニュー画面" }}
        />
        <Stack.Screen
          name="AnalysisMenuScreen"
          component={AnalysisMenuScreen}
          options={{ title: "お魚解析メニュー" }}
        />
        <Stack.Screen
          name="AnalysisResultScreen"
          component={AnalysisResultScreen}
          options={{ title: "解析結果" }}
        />
        <Stack.Screen
          name="MyCollectionMenuScreen"
          component={MyCollectionMenuScreen}
          options={{ title: "マイコレクションメニュー" }}
        />
        <Stack.Screen
          name="MyCollectionRegisterScreen"
          component={MyCollectionRegisterScreen}
          options={{ title: "マイコレクション登録画面" }}
        />
        <Stack.Screen
          name="MyCollectionListScreen"
          component={MyCollectionListScreen}
          options={{ title: "マイコレクション一覧画面" }}
        />
        <Stack.Screen
          name="TestScreen"
          component={TestScreen}
          options={{ title: "Test Page" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
