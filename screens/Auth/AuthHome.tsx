import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

export default () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>AuthHome</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};
