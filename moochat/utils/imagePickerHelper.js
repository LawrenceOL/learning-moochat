import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";

export const launchImagePicker = async () => {
  await checkMediaPermissions();
};

const checkMediaPermissions = async () => {
  if (Platform.os !== "web") {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      return Promise.reject("We need permisison to access your photos");
    }
  }

  console.log("Launching image picker...");
  return Promise.resolve();
};
