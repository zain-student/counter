import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="grey" />
      <View style={styles.innerView}>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <Text style={styles.counterText}>Counter:{counter}</Text>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={reset}>
        <Text style={styles.counterText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  innerView: {
    width: "80%",
    height: "auto",
    // backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  button: {
    width: 60,
    borderRadius: 10,
    height: "auto",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  text: {
    fontSize: 60,
    color: "white",
  },
  counterText: {
    fontSize: 30,
    color: "#fff",
  },
  resetButton: {
    borderRadius: 20,
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "red",
    padding: 10,
    width: 120,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
