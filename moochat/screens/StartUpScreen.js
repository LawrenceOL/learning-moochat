import React from "react";
import { ActivityIndicator, View } from "react-native";
import colors from "../constants/colors";

const StartUpScreen = () => {
  return (
    <View>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default StartUpScreen;
