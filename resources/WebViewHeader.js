import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function WebViewHeader({ navigation, sourceLink }) {
  return (
    <View style={styles.headerContainer}>
      <View style={{ paddingTop: 30, flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Root")}>
          <View style={{ paddingLeft: 20, paddingRight: "10%" }}>
            <Ionicons name="ios-arrow-back" size={30} />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            backgroundColor: "#F2F2F2",
            marginLeft: 30,
            width: "50%",
            textAlign: "center",
            paddingTop: 5,
            fontSize: 14,
            paddingBottom: 5
          }}
        >
          {sourceLink}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#FFFFFF",
    height: 70,
    marginTop: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 0.4
  }
});
