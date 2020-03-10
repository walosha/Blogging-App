import React from "react";
import { Animated, Easing, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function RefreshSpinner({ onRefresh }) {
  const spinValue = new Animated.Value(0);

  React.useEffect(() => {
    spin();
  }, []);

  function spin() {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => {});
  }

  // const onIconClick = () => {
  //   console.log("hiii");
  //    spin();
  // };

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  });

  return (
    <TouchableOpacity onPress={onRefresh}>
      <Animated.View style={{ transform: [{ rotate }] }}>
        <Ionicons color="red" name="md-refresh-circle" size={30}></Ionicons>
      </Animated.View>
    </TouchableOpacity>
  );
}

export default RefreshSpinner;
