import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import userImage from "../assets/images/userImage.jpeg";
import colors from "../constants/colors";

const ProfileImage = (props) => {
  const pickImage = () => {
    console.log("Launching image picker");
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <Image
        style={{
          ...styles.image,
          ...{ width: props.size, height: props.size },
        }}
        source={userImage}
      />
      <View style={styles.editIconContainer}>
        <FontAwesome name="pencil" size={15} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 50,
    borderColor: colors.grey,
    borderWidth: 1,
  },
  editIconContainer: {
    position: "absolute",
    bottom: -10,
    right: -10,
    backgroundColor: colors.lightGrey,
    borderRadius: 20,
    padding: 8,
  },
});

export default ProfileImage;
