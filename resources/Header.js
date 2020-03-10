import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header({
  onSearchInput,
  navigation,
  route,
  arrow,
  focus
}) {
  const [searchInput, setSearchInput] = useState("");

  function oninputChange(text) {
    setSearchInput(text);
  }
  function searchNews() {
    onSearchInput(searchInput);
    setSearchInput("");
  }

  return (
    <View style={styles.headerMain}>
      {arrow ? (
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.navigate(route)}>
            <View style={{ paddingLeft: 10 }}>
              <Ionicons color="#000" name="ios-arrow-back" size={30} />
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
      <View style={styles.searchInputContainer}>
        <TextInput
          onFocus={() => {
            focus ? navigation.navigate(route) : null;
          }}
          returnKeyType={"next"}
          onChangeText={oninputChange}
          onSubmitEditing={searchNews}
          placeholder="Search iBrandTv"
          style={styles.input}
          placeholderTextColor="#767272"
          value={searchInput}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerMain: {
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center"
  },

  searchInputContainer: {
    paddingHorizontal: 10,
    flex: 4
  },

  input: {
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#F2F2F2"
  },
  headerNavController: {
    padding: 5,
    flexDirection: "row"
  },

  headerNavControllerText: {
    paddingLeft: 10,
    paddingRight: 14,
    paddingTop: 5,
    fontWeight: "bold",
    fontSize: 15,
    color: "#767272"
  },
  headerNavControllerTextActive: {
    paddingLeft: 10,
    paddingRight: 13,
    fontWeight: "bold",
    fontSize: 19
  },

  headerNavControllerPlusIcon: {
    paddingTop: 5,
    marginLeft: "auto",
    paddingRight: 20
  }
});
