import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const clickHandler = () => {
    console.log("Button pressed! Boop");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Mooooo!</Text>
      <StatusBar style="auto" />

      <Button title="First Button" onPress={clickHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "white",
    fontSize: 30,
  },
});
