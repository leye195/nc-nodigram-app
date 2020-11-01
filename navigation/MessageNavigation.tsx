import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Message from "../screens/Messages/Message";
import Messages from "../screens/Messages/Messages";

const StackNavigator = createStackNavigator();

export default () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name={"Messages"} component={Messages} />
      <StackNavigator.Screen name={"Message"} component={Message} />
    </StackNavigator.Navigator>
  );
};
