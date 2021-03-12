import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CeoOption from "./ceoOptioin";
import CeoClient from "./ceoClientList";
import AllTrainerClientList from "./allTrainerClientList";

const Tab = createBottomTabNavigator();

const TabMenu: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="트레이너" component={AllTrainerClientList} />
      <Tab.Screen name="PT" component={CeoClient} />
      <Tab.Screen name="설정" component={CeoOption} />
    </Tab.Navigator>
  );
};

export default TabMenu;
