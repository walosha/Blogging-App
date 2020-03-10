import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export default function VideoThumbnail({ navigation, video }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("VideoReelPlayer", video)}
    >
      <View>
        <View>
          <Image source={video.thumbnail} style={styles.thumbnail} />
          <MaterialIcons
            style={styles.playButton}
            name="play-circle-filled"
            size={35}
          />
        </View>
        <View style={styles.description}>
          <Image source={video.channelImage} style={styles.channelImage} />
          <View>
            <Text style={styles.title}>{video.title}</Text>
            <Text style={styles.subtitle}>
              {`${video.channel} • ${
                video.views
              } views • ${video.published.fromNow()}`}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    width: "100%",
    height: 200
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "45%",
    color: "#FFFFFF"
  },
  description: {
    flexDirection: "row",
    margin: 16,
    marginBottom: 32
  },
  channelImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16
  },
  title: {
    fontSize: 15,
    width: "100%"
  },
  subtitle: {
    color: "gray"
  }
});
