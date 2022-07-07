import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import MainButton from "components/MainButton";
import { TextInput } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [usernameText, setUsernameText] = React.useState("");
  const [passwordText, setPasswordText] = React.useState("");

  return (
    <View
      style={[
        {
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          flex: 1,
        },
      ]}
    >
      <View>
        <Image
          source={require("../../assets/Goldman_Sachs.png")}
          style={[
            {
              width: 300,
              height: 300,
              // justifyContent: "center",
              // marginLeft: 140,
            },
          ]}
        />
      </View>

      <View style={[{ width: "100%", marginTop: 10 }]}>
        <TextInput
          label="Username"
          value={usernameText}
          onChangeText={(text) => setUsernameText(text)}
        />
        <TextInput
          label="Passsword"
          value={passwordText}
          onChangeText={(text) => setPasswordText(text)}
        />
      </View>
      <View style={{}}>
        <MainButton onPress={() => navigation.navigate("GSWhere")}>
          Login
        </MainButton>
      </View>
    </View>
  );
};

export default LoginScreen;
