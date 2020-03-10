import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Icons({ name, label, active }) {
  return (
    <View style={styles.container}>
      <Feather
        style={styles.icon}
        {...{ name }}
        color={active ? "red" : "gray"}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  icon: {
    fontSize: 24
  },
  label: {
    color: "gray",
    textAlign: "center",
    marginTop: 8
  }
});
