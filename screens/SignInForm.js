import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FormInput from "../resources/FormInput";
import HeaderNavigation from "../resources/HeaderNavigation";
import Button from "../resources/Button";

export default function LogInForm({ navigation }) {
  const [values, setValues] = useState({ email: "", password: "" });
  const [Loading, setLoading] = useState(false);

  function onChange(type, e) {
    setValues({ ...values, [type]: e });
  }

  const onSubmit = function() {
    if (!Loading) {
      setLoading(true);
      setTimeout(function() {
        navigation.navigate("UserAccount");
      }, 5000);
    }
  };

  return (
    <View>
      <HeaderNavigation
        navigation={navigation}
        route="Account"
        headerText="Sign In"
      />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <FormInput
            onChange={e => onChange("email", e)}
            label="Email or Phone Number"
          />
          <FormInput
            onChange={e => onChange("password", e)}
            hideInput
            label="Password"
          />
        </View>
        <View>
          <Button
            onSubmit={onSubmit}
            color
            buttonText={Loading ? "Loading...." : "Log In"}
          />
          {Loading ? <View style={styles.overlay}></View> : null}
          <Button
            navigation={navigation}
            route="SignUpForm"
            buttonText="Sign up with email"
          />
          <TouchableOpacity>
            <Text style={styles.text}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 19
  },
  formContainer: {
    marginBottom: 30
  },
  text: {
    color: "red",
    textAlign: "center"
  },
  overlay: {
    backgroundColor: "#E27D5F",
    opacity: 0.5,
    height: 47,
    width: "100%",
    position: "absolute",
    zIndex: 5
  }
});
