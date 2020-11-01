import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import Nofification from "../screens/Notification";
import AddTabButton from "../components/AddTabButton";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderButton from "../components/HeaderButton";

const StackNavigation = createStackNavigator();
const TabNavigation = createBottomTabNavigator();

// Tab 내부에 stackNavigator를 리턴해 header를 포함해줌, stack을 tab screen으로
const stackFactory = (
  initialRoute: any,
  name: string,
  customConfig: any = {}
) => (
  <StackNavigation.Navigator>
    <StackNavigation.Screen
      name={name}
      component={initialRoute}
      options={{ ...customConfig }}
    />
  </StackNavigation.Navigator>
);

export default () => {
  const navigation = useNavigation();
  return (
    <TabNavigation.Navigator>
      <TabNavigation.Screen name="Home">
        {() =>
          stackFactory(Home, "Home", {
            title: "Home",
            headerRight: () => <HeaderButton />,
          })
        }
      </TabNavigation.Screen>
      <TabNavigation.Screen name={"Search"}>
        {() => stackFactory(Search, "Search", { title: "Search" })}
      </TabNavigation.Screen>
      <TabNavigation.Screen
        name={"Add"}
        component={AddTabButton}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("Photo");
          },
        })}
      />
      <TabNavigation.Screen name={"Notification"}>
        {() =>
          stackFactory(Nofification, "Notifications", {
            title: "Notifications",
          })
        }
      </TabNavigation.Screen>
      <TabNavigation.Screen name={"Profile"}>
        {() => stackFactory(Profile, "Profile", { title: "Profile" })}
      </TabNavigation.Screen>
    </TabNavigation.Navigator>
  );
};
