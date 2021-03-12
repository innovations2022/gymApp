import React, { FC, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import {
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { Value } from "react-native-reanimated";

// <신규회원 등록 메뉴> 누르면
// users collection 에 넣게한다.
// {트레이너 }, {(회원)이름 }, {성별 }, {생년월일 }
// {연락처 }, {주소 }, {직업 }, {비고 }, {등록자 }
// 밑에는 결제 collectioin으로 넣어야 한다.
// {등록구분 }, {등록횟수 }, {락커, 운동복 }, {락커번호 }
// {개인운동 }, {추가사항 }, {결제방식 }, {분할 여부 }, {계산 }
//  값을 대입하면 금액이 자동 산정되며, 그것에 대한 <(회원 등록) 버튼>을 만든다.

interface IRegisterForm {
  trainer: string;
  client: string;
}

const App: FC = () => {
  const { control, handleSubmit } = useForm<IRegisterForm>();
  return (
    <ScrollView style={styles.scrollView}>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="트레이너"
          />
        )}
        name="trainer"
        rules={{ required: true }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="회원이름"
          />
        )}
        name="client"
        rules={{ required: true }}
        defaultValue=""
      />
      <Button
        title="Submit"
        onPress={handleSubmit((data) => console.log(data))}
      />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
  },
  label: {
    color: "#61dafb",
    fontSize: 14,
    fontWeight: "bold",
  },
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
  scrollView: {
    paddingVertical: 80,
    paddingHorizontal: 30,
  },
});
