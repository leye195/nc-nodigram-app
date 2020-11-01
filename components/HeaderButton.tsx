import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
  padding: 10px;
`;
const Text = styled.Text``;
const HeaderButton = () => {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate("Messages")}>
      <Text>Messages</Text>
    </Container>
  );
};
export default HeaderButton;
