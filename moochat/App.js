import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((previousValue) => {
      return previousValue + 1;
    });

    //simplified one line version
    setCount((previousValue) => previousValue + 1);
  };

  const subtract = () => {
    setCount(count - 1);
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <Button title="Add" onPress={add} />
        <Text style={styles.label}>{count}</Text>

        <Button title="Subtract" onPress={subtract} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "white",
    fontSize: 30,
  },
});
