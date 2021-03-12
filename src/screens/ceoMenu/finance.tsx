import React, { FC, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

const Finance: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Finance</Text>
    </View>
  );
};

export default Finance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
