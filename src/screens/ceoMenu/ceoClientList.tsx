import React, { FC, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Button, Input } from "../../components";
import firebase from "firebase";

const CeoOption: FC = (props) => {
  return (
    <View style={styles.container}>
      <Text>Ceo client Screen</Text>
    </View>
  );
};

export default CeoOption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
