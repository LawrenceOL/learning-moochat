import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//my file imports
import MainNavigator from "./MainNavigator";

const AppNavigator = (props) => {
  return (
    // will contain multiple navigators rendered conditionally
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
