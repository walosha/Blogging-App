import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Tab from "../resources/Tab";
import UserAccount from "../resources/UserAccount";

const UserScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Auth");
          }}
        >
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      <UserAccount
        navigation={navigation}
        following="56"
        followers="700"
        post="3"
        name="Olawale Joshua"
        image={require("../assets/davido.png")}
      />
      <Tab />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    height: 69,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    borderColor: "#e5e5e5",
    borderWidth: 1,
    marginTop: 12
  },
  signOutText: {
    backgroundColor: "red",
    paddingHorizontal: 26,
    paddingVertical: 10,
    color: "#fff",
    fontWeight: "bold",
    borderRadius: 7,
    elevation: 4
  }
});

export default UserScreen;
