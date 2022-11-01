import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, FontAwesome } from "@expo/vector-icons";

import Input from "../components/Input";
import PageContainer from "../components/PageContainer";
import SubmitButton from "../components/SubmitButton";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";

const AuthScreen = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        {isSignUp ? <SignUpForm /> : <SignInForm />}

        <TouchableOpacity
          onPress={() => setIsSignUp((prevState) => !prevState)}
        >
          <Text>{`Switch to ${isSignUp ? "sign in" : "sign up"}`}</Text>
        </TouchableOpacity>
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AuthScreen;
