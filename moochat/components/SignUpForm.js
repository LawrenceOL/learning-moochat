import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";

import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

const SignUpForm = (props) => {
  const inputChangedHandler = (inputId, inputValue) => {
    console.log(validateInputnput(inputId, inputValue));
  };

  return (
    <>
      <Input
        label="First name"
        icon="user-o"
        iconPack={FontAwesome}
        onInputChanged={inputChangedHandler}
        id="firstName"
        autoCapitalize="none"
      />
      <Input
        label="Last name"
        icon="user-o"
        iconPack={FontAwesome}
        onInputChanged={inputChangedHandler}
        id="lastName"
        autoCapitalize="none"
      />
      <Input
        label="Email"
        icon="mail"
        iconPack={Feather}
        onInputChanged={inputChangedHandler}
        id="email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        label="Password"
        icon="lock"
        autoCapitalize="none"
        secureTextEntry
        iconPack={Feather}
        onInputChanged={inputChangedHandler}
        id="password"
      />

      <SubmitButton
        title="Sign up"
        onPress={() => console.log("Sign up button pressed")}
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignUpForm;
