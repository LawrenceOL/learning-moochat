import React from "react";
import { Feather } from "@expo/vector-icons";

import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/formActions";

const SignInForm = () => {
  const inputChangedHandler = (inputId, inputValue) => {};

  return (
    <>
      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        keyboardType="email-address"
        autoCapitalize="none"
        onInputChanged={inputChangedHandler}
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        iconPack={Feather}
        autoCapitalize="none"
        secureTextEntry
        onInputChanged={inputChangedHandler}
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
