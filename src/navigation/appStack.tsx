import React, { FC, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PerTrainerClientList } from "../screens";
import TabMenu from "../screens/ceoMenu/tabMenu";
import firebase from "firebase";
import Finance from "../screens/ceoMenu/finance";
import ErollClient from "../screens/enrollClient";

const { Navigator, Screen } = createStackNavigator();

const AppStack: FC<any> = () => {
  const [mode, setMode] = useState<any>(null);
  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user) {
      if (user.uid === "sa8Ao6WSekU15223lhzWmSzpBhw1") {
        setMode("Ceo");
      } else {
        setMode("perTrainer");
      }
    }
  }, []);
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {mode === "perTrainer" ? (
        <Screen name="perTrainerClientList" component={PerTrainerClientList} />
      ) : (
        <Screen name="TabMenu" component={TabMenu} />
      )}
      <Screen name="finance" component={Finance} />
      <Screen name="enrollClinet" component={ErollClient} />
    </Navigator>
  );
};

export default AppStack;
