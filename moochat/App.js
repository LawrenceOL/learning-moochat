import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const clickHandler = () => {
    console.log("Button pressed! Boop");
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <Text style={styles.label}>Mooooo!</Text>
        <StatusBar style="auto" />

        <Button title="First Button" onPress={clickHandler} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
  },
  label: {
    color: "white",
    fontSize: 30,
  },
});
