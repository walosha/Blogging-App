import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { navigation } from "../resources/HeaderNavigation";

const Comments = ({ navigation }) => {
  return (
    <View style={styles.commentContainer}>
      <Text>Comments</Text>
      <Text>Comments</Text>
      <Text>Comments</Text>
      <Text>Comments</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    padding: 10
  }
});
export default Comments;
