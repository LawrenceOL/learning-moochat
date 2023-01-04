import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";
import { getFirebaseApp } from "./firebaseHelper";

export const launchImagePicker = async () => {
  await checkMediaPermissions();

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  if (!result.cancelled) {
    return result.uri;
  }
};

export const uploadImageAsync = async (uri) => {
  const app = getFirebaseApp();

  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };

    xhr.onerror = function (error) {
      console.log(error);
      reject(new TypeError("Network Request Failed"));
    };

    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send();
  });
};

const checkMediaPermissions = async () => {
  if (Platform.os !== "web") {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      return Promise.reject("We need permisison to access your photos");
    }
  }

  return Promise.resolve();
};
