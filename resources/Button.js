import React from "react";
import { Text, TouchableOpacity } from "react-native";

function Button({ buttonText, color, navigation, route, onSubmit }) {
  const buttonContainer = {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: color ? "red" : "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#aaa",
    marginBottom: 25
  };

  const text = {
    fontSize: 19,
    textAlign: "center",
    color: color ? "white" : "black"
  };

  function textSubmit() {
    onSubmit ? onSubmit() : null;
  }

  return (
    <TouchableOpacity
      onPress={() => {
        textSubmit();
        navigation ? navigation.navigate(route) : null;
      }}
      style={buttonContainer}
    >
      <Text style={text}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

export default Button;
