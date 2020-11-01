import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
//import { createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import { createStackNavigator } from "@react-navigation/stack";

const StackNavigator = createStackNavigator();
const TopTabNavigator = createMaterialTopTabNavigator();
const PhotoTabs = () => {
  return (
    <TopTabNavigator.Navigator tabBarPosition={"bottom"}>
      <TopTabNavigator.Screen name={"SelectPhoto"} component={SelectPhoto} />
      <TopTabNavigator.Screen name={"TakePhoto"} component={TakePhoto} />
    </TopTabNavigator.Navigator>
  );
};

export default () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name={"PhotoTabs"} component={PhotoTabs} />
      <StackNavigator.Screen name={"UploadPhoto"} component={UploadPhoto} />
    </StackNavigator.Navigator>
  );
};
