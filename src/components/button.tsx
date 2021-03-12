import React, { FC, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
}

const App: FC<Props> = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default App;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginVertical: 10,
  },
  text: {
    color: "#fff",
  },
});
