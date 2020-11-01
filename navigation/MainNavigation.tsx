import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";
import MessageNavigation from "./MessageNavigation";
const MainNavigation = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <MainNavigation.Navigator
        headerMode={"none"}
        mode={Platform.OS === "ios" ? "modal" : "card"}
      >
        <MainNavigation.Screen name="Main" component={TabNavigation} />
        <MainNavigation.Screen name="Photo" component={PhotoNavigation} />
        <MainNavigation.Screen name="Messages" component={MessageNavigation} />
      </MainNavigation.Navigator>
    </NavigationContainer>
  );
};
