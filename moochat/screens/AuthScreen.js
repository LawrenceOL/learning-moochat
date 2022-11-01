import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, FontAwesome } from "@expo/vector-icons";

import Input from "../components/Input";
import PageContainer from "../components/PageContainer";
import SubmitButton from "../components/SubmitButton";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import colors from "../constants/colors";
import logo from "../assets/images/logo.png";

const AuthScreen = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <View style={styles.imageContainer}>
          <Image source={logo} style={styles.image} />
        </View>

        {isSignUp ? <SignUpForm /> : <SignInForm />}

        <TouchableOpacity
          onPress={() => setIsSignUp((prevState) => !prevState)}
          style={styles.linkContainer}
        >
          <Text style={styles.link}>{`Switch to ${
            isSignUp ? "sign in" : "sign up"
          }`}</Text>
        </TouchableOpacity>
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  link: {
    color: colors.blue,
    fontFamily: "medium",
    letterSpacing: 0.3,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "60%",
    resizeMode: "contain",
  },
});

export default AuthScreen;
