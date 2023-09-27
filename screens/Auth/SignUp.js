import React from "react";
import { Text,View,Button} from 'react-native'

export default function SignUp({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>SignUP Page</Text>
        <Button title="Log in" onPress={() => navigation.navigate("login")} />
      </View>
    );
}