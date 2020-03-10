import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchResults = ({ title, subtitle, content }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text
        style={{
          fontSize: 19
        }}
      >
        {subtitle}
      </Text>
      <Text>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
    borderColor: "brown",
    borderWidth: 3,
    marginBottom: 16,
    marginHorizontal: 13,
    borderRadius: 7,
    elevation: 5
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    padding: 7,
    textDecorationLine: "underline"
  }
});
export default SearchResults;
