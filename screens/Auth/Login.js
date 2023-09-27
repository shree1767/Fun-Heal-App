import React from "react";
import { Text, View, Button } from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login Page</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate("signup")} />
    </View>
  );
}
