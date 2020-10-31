import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import Nofification from "../screens/Notification";

const TabNavigation = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <TabNavigation.Navigator>
        <TabNavigation.Screen name={"Home"} component={Home} />
        <TabNavigation.Screen name={"Notification"} component={Nofification} />
        <TabNavigation.Screen name={"Search"} component={Search} />
        <TabNavigation.Screen name={"Profile"} component={Profile} />
      </TabNavigation.Navigator>
    </NavigationContainer>
  );
};
