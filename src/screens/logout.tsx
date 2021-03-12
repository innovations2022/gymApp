import React, { FC, useState } from "react";
import { Alert, StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Input, Button } from "../components";
import firebase from "firebase";

const App: FC = (props) => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const login = async () => {
    if (email && password) {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
    } else {
      Alert.alert(`Mission Fields`);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../img/highFit_Logo.png")} />
      <Text>Login </Text>
      <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="Login" onPress={login} />

      <View style={styles.loginText}>
        <Text style={{ marginHorizontal: 5 }}>Don't Have an Account?</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("signup")}
          style={{ marginHorizontal: 5 }}
        >
          <Text style={{ color: "rgba(81,135,200,1)" }}>Sign Up Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    flexDirection: "row",
    marginVertical: 20,
  },
  logo: {
    width: 150,
    height: 100,
  },
});
