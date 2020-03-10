import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const InterestsCard = ({ image, cardTitle, text, remove, onPress }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={{ flex: 1 }}>
        <Image style={styles.cardImg} source={image} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{cardTitle}</Text>
        <Text style={{ fontSize: 10, color: "#373737" }}>{text}</Text>
      </View>
      <View style={styles.cardIconContainer}>
        <TouchableOpacity onPress={onPress}>
          {!remove ? (
            <MaterialIcons size={30} name="add" color="red" />
          ) : (
            <Text style={styles.removeText}>Remove</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#a7a7a7",
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 19,
    flexDirection: "row",
    marginBottom: 10,
    elevation: 6
  },
  cardImg: {
    height: 50,
    width: 50,
    borderRadius: 5
  },
  cardContent: {
    flex: 3,
    alignItems: "flex-start"
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#373737"
  },
  cardIconContainer: {
    width: 70,
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#fff"
  },
  removeText: {
    paddingTop: 3,
    paddingBottom: 3,
    fontWeight: "bold",
    color: "#FF0000"
  }
});

export default InterestsCard;
