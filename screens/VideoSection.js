import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const videosTabs = [
  [require("../assets/soyinka.jpg"), "News"],
  [require("../assets/davidchi.jpg"), "Movies"],
  [require("../assets/space.jpg"), "TvSeries"],
  [require("../assets/davido.png"), "Music Videos"]
];

export default function VideoSection({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <View style={styles.wrapper}>
          <View style={styles.roundcardSection}>
            <TouchableOpacity>
              <View>
                <Image
                  style={styles.imageStyleLeft}
                  source={videosTabs[0][0]}
                />
                <Text style={styles.videoText}>{videosTabs[0][1]}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View>
                <Image
                  style={styles.imageStyleRight}
                  source={videosTabs[1][0]}
                />
                <Text style={styles.videoText}>{videosTabs[1][1]}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.roundcardSection}>
            <TouchableOpacity>
              <View>
                <Image
                  style={styles.imageStyleLeft}
                  source={videosTabs[2][0]}
                />
                <Text style={styles.videoText}>{videosTabs[2][1]}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("MusicVideos")}
            >
              <View>
                <Image
                  style={styles.imageStyleRight}
                  source={videosTabs[3][0]}
                />
                <Text style={styles.videoText}>{videosTabs[3][1]}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F2F2F2"
  },
  sectionContainer: {
    height: "80%",
    flexWrap: "wrap"
  },

  wrapper: {
    flex: 1,
    marginVertical: 10,
    width: "100%"
  },
  roundcardSection: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 50
  },
  imageStyleLeft: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderColor: "red",
    borderWidth: 7
  },
  imageStyleRight: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderColor: "red",
    borderWidth: 7,
    marginLeft: 30
  },
  videoText: {
    textAlign: "center",
    fontWeight: "bold",
    padding: 10
  }
});
