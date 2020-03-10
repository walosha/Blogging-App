import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image
} from "react-native";

const countries = [
  [
    { country: "South Africa", flag: require("../assets/flags/sa.png") },
    { country: "UK", flag: require("../assets/flags/uk.png") }
  ],
  [
    { country: "USA", flag: require("../assets/flags/usa.png") },
    { country: "Ghana", flag: require("../assets/flags/ghana.png") }
  ],
  [
    { country: "Canada", flag: require("../assets/flags/canada.png") },
    { country: "Mexico", flag: require("../assets/flags/mexico.png") }
  ],
  [
    { country: "Senegal", flag: require("../assets/flags/senegal.png") },
    { country: "France", flag: require("../assets/flags/france.png") }
  ],
  [
    { country: "Argentina", flag: require("../assets/flags/arg.png") },
    { country: "Senega", flag: require("../assets/flags/senegal.png") }
  ],
  [
    { country: "Sweden", flag: require("../assets/flags/sweden.png") },
    { country: "Zimbabwe", flag: require("../assets/flags/zimba.png") }
  ]
];

export default function Explore({ navigation: { navigate } }) {
  return (
    <View style={styles.mainContainer}>
      {countries.map((country, idx) => (
        <View key={idx} style={styles.container}>
          <TouchableOpacity
            onPress={() => navigate("ExploreScreen", country[0].country)}
            style={styles.exploreContainer}
          >
            <Image style={styles.image} source={country[0].flag} />
            <Text style={styles.overlay}></Text>
            <Text style={styles.textExplore}>{country[0].country}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("ExploreScreen", country[1].country)}
            style={styles.exploreContainer}
          >
            <Image style={styles.image} source={country[1].flag} />
            <Text style={styles.overlay}></Text>
            <Text style={styles.textExplore}>{country[1].country}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  container: {
    flex: 1,
    paddingHorizontal: 9,
    justifyContent: "center",
    backgroundColor: "#fff",
    flexDirection: "row"
  },
  exploreContainer: {
    flex: 1,
    height: 75,
    width: 70,
    margin: 10,
    position: "relative",
    elevation: 2,
    borderRadius: 20
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 20
  },
  textExplore: {
    color: "#fff",
    fontSize: 17,
    flex: 1,
    position: "absolute",
    top: "30%",
    left: "30%",
    zIndex: 90
  },
  overlay: {
    backgroundColor: "#20232A",
    opacity: 0.7,
    borderRadius: 20,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});
