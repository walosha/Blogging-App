import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

export default function Loader() {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
