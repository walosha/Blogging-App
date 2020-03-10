import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";

import { Entypo } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
import VideoContent from "../resources/videos/RelatedVideoContent";

export default function VideoReelPlayer({ navigation }) {
  const video = {
    title: navigation.getParam("title"),
    video: navigation.getParam("video"),
    channel: navigation.getParam("channel"),
    views: navigation.getParam("views"),
    published: navigation.getParam("published")
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#FF0000", height: 24 }}></View>
      <View style={{ width, height: width * 0.6, backgroundColor: "black" }}>
        <VideoPlayer
          videoProps={{
            shouldPlay: true,
            resizeMode: Video.RESIZE_MODE_COVER,
            source: video.video
          }}
          width={width}
          height={width * 0.6}
          showControlsOnLoad={true}
          playIcon={() => <Entypo name="controller-play" style={styles.icon} />}
          pauseIcon={() => (
            <Entypo name="controller-paus" style={styles.icon} />
          )}
          sliderColor="#FF0000"
          showFullscreenButton={false}
        />
      </View>
      <VideoContent video={video} navigation={navigation} />
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  overlay: {
    ...StyleSheet.absoluteFillObject
  },
  overlaySet: {
    flex: 1,
    flexDirection: "row"
  },
  icon: {
    color: "white",
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 25
  },
  sliderCont: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0
  },
  timer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5
  },
  video: { width, height: width * 0.6, backgroundColor: "black" },
  fullscreenVideo: {
    backgroundColor: "black",
    ...StyleSheet.absoluteFill,
    elevation: 1
  }
});
