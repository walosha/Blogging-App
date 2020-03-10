import React from "react";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import VideoThumbnail from "../resources/videos/VideoThumbnail";
import videos from "../dataVideo";
import SearchHeader from "../resources/videos/SearchHeader";

export default function VideoSectionMusic({ navigation }) {
  const scrollY = new Animated.Value(0);
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, 100);
  const headerY = Animated.interpolate(diffClampScrollY, {
    inputRange: [0, 70],
    outputRange: [0, -100]
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          zIndex: 1000,
          elevation: 1000,
          transform: [{ translateY: headerY }]
        }}
      >
        <SearchHeader navigation={navigation} />
      </Animated.View>

      <Animated.ScrollView
        bounces={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { y: scrollY } }
          }
        ])}
      >
        <View style={{ marginTop: 50 }}>
          {videos.map(video => (
            <VideoThumbnail
              key={video.id}
              video={video}
              navigation={navigation}
            />
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});
