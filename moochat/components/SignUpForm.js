import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";

import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { validateEmail, validateString } from "../utils/validationConstraints";

const SignUpForm = (props) => {
  const inputChangedHandler = (inputId, inputValue) => {
    if (inputId === "firstName" || inputId === "lastName") {
      console.log(validateString(inputId, inputValue));
    } else if (inputId === "email") {
      console.log(validateEmail(inputId, inputValue));
    }
    // else (inputId === "password") {

    // }
  };

  return (
    <>
      <Input
        label="First name"
        icon="user-o"
        iconPack={FontAwesome}
        onInputChanged={inputChangedHandler}
        id="firstName"
      />
      <Input
        label="Last name"
        icon="user-o"
        iconPack={FontAwesome}
        onInputChanged={inputChangedHandler}
        id="lastName"
      />
      <Input
        label="Email"
        icon="mail"
        iconPack={Feather}
        onInputChanged={inputChangedHandler}
        id="email"
      />
      <Input
        label="Password"
        icon="lock"
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
