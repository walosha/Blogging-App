import React from "react";
import { Linking } from "expo";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function WebViewFooter({ text, source }) {
  const shareToWhatsApp = () => {
    Linking.openURL(`whatsapp://send?text=${source}`);
  };
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <View style={styles.commentBoard}>
          <TextInput placeholder="Write a comment..." style={styles.input} />
        </View>
        <TouchableOpacity>
          <View style={styles.individualIconBoard}>
            <MaterialIcons name="insert-comment" size={30} color="#3C3A3A" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.individualIconBoard}>
            <MaterialIcons name="share" size={30} color="#3C3A3A" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={shareToWhatsApp}
          style={styles.individualIconBoard}
        >
          <View>
            <Ionicons name="logo-whatsapp" size={30} color="#25D366" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#FFFFFF"
  },

  input: {
    height: 40,
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#F2F2F2"
  },
  navContainer: {
    paddingHorizontal: 10,
    flexDirection: "row"
  },
  commentBoard: {
    paddingTop: 10,
    width: "50%"
  },
  individualIconBoard: {
    paddingTop: 20,
    marginLeft: 15,
    marginRight: 15
  }
});
