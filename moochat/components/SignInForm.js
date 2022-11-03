import React from "react";
import { Feather } from "@expo/vector-icons";

import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

const SignInForm = () => {
  return (
    <>
      <Input
        label="Email"
        icon="mail"
        iconPack={Feather}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        label="Password"
        icon="lock"
        iconPack={Feather}
        autoCapitalize="none"
        secureTextEntry
      />

      <SubmitButton
        title="Sign in"
        onPress={() => console.log("Sign up button pressed")}
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignInForm;
