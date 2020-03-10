import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

export default function SearchHeader({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerBoard}>
        <View style={{ width: "10%" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Root")}>
            <View
              style={{ paddingTop: 15, paddingLeft: 20, paddingRight: "10%" }}
            >
              <Ionicons name="ios-arrow-back" size={30} color="#F2F2F2" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ width: "80%", justifyContent: "center" }}>
          <View style={styles.searchInputContainer}>
            <TextInput
              placeholder="Search music"
              style={styles.input}
              placeholderTextColor="#767272"
            />
          </View>
        </View>
      </View>
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#FF0000"
  },
  headerBoard: {
    flexDirection: "row",
    marginHorizontal: 10
  },
  searchInputContainer: {
    marginLeft: 20,
    paddingTop: 10,
    paddingHorizontal: 10
  },

  input: {
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
    paddingVertical: 6,
    backgroundColor: "#F2F2F2"
  }
});
