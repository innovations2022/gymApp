import React, { FC, useState } from "react";
import { Alert, StyleSheet, Text, View, Button } from "react-native";
import firebase from "firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import Finance from "./finance";

const CeoOption: FC = (props) => {
  const [msg, setMsg] = useState<string | null>(null);

  const signOut = () => {
    firebase.auth().signOut();
  };

  return (
    <View style={styles.container}>
      <Text>설정 페이지</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("enrollClinet")}
      >
        <Text style={{ color: "rgba(81,135,200,1)" }}>신규회원 등록</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("finance")}>
        <Text style={{ color: "rgba(81,135,200,1)" }}>매출 / 순이익</Text>
      </TouchableOpacity>
      <Button title="로그아웃" onPress={signOut} />
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
