import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, FontAwesome } from "@expo/vector-icons";

import Input from "../components/Input";
import PageContainer from "../components/PageContainer";
import SubmitButton from "../components/SubmitButton";

const AuthScreen = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <Input label="First name" icon="user-o" iconPack={FontAwesome} />
        <Input label="Last name" icon="user-o" iconPack={FontAwesome} />
        <Input label="Email" icon="mail" iconPack={Feather} />
        <Input label="Password" icon="lock" iconPack={Feather} />

        <SubmitButton />
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AuthScreen;
