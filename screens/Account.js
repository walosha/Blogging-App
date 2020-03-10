import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export default function Account({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sign in with</Text>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignInForm", navigation)}
        >
          <View
            style={{ ...styles.signinOptionStyles, backgroundColor: "#47a3ff" }}
          >
            <FontAwesome style={styles.icon} name="mobile" />

            <Text style={styles.signinText}>Mobile Number</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.signinOptionStyles}>
            <Image
              source={require("../assets/google.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={{ ...styles.signinText, color: "#47a3ff" }}>
              Google
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.otherSignIn}>
        <Text style={styles.otherSignInText}>Or with others</Text>
        <View style={{ alignItems: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignInForm", navigation)}
              style={styles.iconContainer}
            >
              <Entypo style={styles.icon} name="mail" />
            </TouchableOpacity>
            <TouchableOpacity
              //onPress={() => navigation.navigate("UserAccount", navigation)}
              style={{ ...styles.iconContainer, backgroundColor: "#1976d2" }}
            >
              <FontAwesome style={styles.icon} name="facebook" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.termsText}>
        By continuing, You agree to Terms and Privacy Policy
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#3e3f40"
  },

  signinOptionStyles: {
    backgroundColor: "#fff",
    borderRadius: 3,
    padding: 10,
    width: 280,
    marginBottom: 10,
    flexDirection: "row",
    elevation: 2
  },

  otherSignIn: {
    marginBottom: 40,
    marginTop: 75
  },
  otherSignInText: {
    marginBottom: 20,
    color: "#9c9c9c",
    fontWeight: "700",
    fontSize: 17,
    paddingLeft: 20
  },

  termsText: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    color: "#757575"
  },
  icon: {
    fontSize: 25,
    color: "#fff",
    textAlign: "center"
  },
  iconContainer: {
    backgroundColor: "#e64a19",
    height: 65,
    width: 65,
    color: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    marginHorizontal: 2,
    marginRight: 10,
    elevation: 5
  },

  signinText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    width: "90%"
  }
});
