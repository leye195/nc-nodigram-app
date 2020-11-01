import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
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
      <TouchableOpacity onPress={() => navigation.navigate("UploadPhoto")}>
        <Text>Take</Text>
      </TouchableOpacity>
    </View>
  );
};
