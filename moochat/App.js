import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Total from "./Total";

export default function App() {
  const [numSandwiches, setNumSandwiches] = useState(0);
  const [numWater, setNumWater] = useState(0);

  const sandwichPrice = 10;

  const addSandwich = () => {
    setNumSandwiches((numSandwiches) => numSandwiches + 1);
  };

  const addWater = () => {
    setNumWater((numWater) => numWater + 1);
  };

  const getTotal = useCallback(() => {
    return numSandwiches * sandwichPrice;
  }, [numSandwiches]);

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <Text style={styles.label}>Sandwiches: {numSandwiches}</Text>
        <Button title="Add Sandwich" onPress={addSandwich} />
        <Text style={styles.label}>Waters: {numWater}</Text>
        <Button title="Add Water" onPress={addWater} />
        <Total getTotal={getTotal} />
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
