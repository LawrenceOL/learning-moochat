import React, { useReducer } from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";

import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/formActions";

const SignUpForm = (props) => {
  const reducer = (state, action) => {
    const { validationResult } = action;

    console.log(validationResult);

    state.formIsValid = validationResult === undefined;
    return {
      ...state,
      formIsValid: validationResult === undefined,
    };
  };

  const initialState = {
    inputValidities: {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
    },
    formisValid: false,
  };

  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangedHandler = (inputId, inputValue) => {
    const result = validateInput(inputId, inputValue);
    dispatchFormState({ validationResult: result });
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
        disabled={!formState.formIsValid}
      />
    </>
  );
};

export default SignUpForm;
