import React, { FC, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Button, Input } from "../../components";
import firebase from "firebase";

const App: FC = (props) => {
  return (
    <View style={styles.container}>
      <Text>트레이너 개별 박스 구분 박스 만들기</Text>
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
});
