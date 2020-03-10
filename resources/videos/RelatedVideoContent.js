import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import Icons from "./VideoIcons";

import videos from "../../dataVideo";

export default function VideoContent({ video, navigation }) {
  const [like, setLike] = useState([false, 10]);
  const [dislike, setDislike] = useState([false, 0]);

  const userLike = () => {
    setLike([true, like[1] + 1]);
  };
  const userDislike = () => {
    setDislike([true, dislike[1] + 1]);
  };

  return (
    <ScrollView>
      <View style={styles.content}>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.views}>{`${video.views} views`}</Text>
        <View style={styles.icons}>
          <TouchableWithoutFeedback onPress={() => userLike()}>
            <View style={styles.iconFlex}>
              <Icons name="thumbs-up" label={like[1]} active={like[0]} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => userDislike()}>
            <View style={styles.iconFlex}>
              <Icons
                name="thumbs-down"
                label={dislike[1]}
                active={dislike[0]}
              />
            </View>
          </TouchableWithoutFeedback>
          <Icons name="share" label="Share" />
          <Icons name="arrow-down-circle" label="Download" />
          <Icons name="list" label="Save" />
        </View>
      </View>
      <View style={styles.upNext}>
        <Text style={styles.upNextTitle}>Up next</Text>
        {videos.map(v => (
          <TouchableWithoutFeedback
            key={v.id}
            onPress={() => navigation.replace("VideoReelPlayer", (video = v))}
          >
            <View key={v.id} style={styles.thumbnail}>
              <Image source={v.thumbnail} style={styles.thumbnailImage} />
              <View style={styles.thumbnailContent}>
                <Text
                  numberOfLines={2}
                  style={{ ...styles.thumbnailTitle, width: "100%" }}
                >
                  {v.title}
                </Text>
                <Text
                  style={{ ...styles.thumbnailChannel, fontWeight: "bold" }}
                >
                  {v.channel}
                </Text>
                <Text style={styles.thumbnailChannel}>
                  {`${v.published.fromNow()} • ${v.views} views`}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16
  },
  title: {
    fontSize: 16,
    marginBottom: 8
  },
  views: {
    color: "gray",
    marginBottom: 16
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  iconFlex: {
    flex: 1
  },
  upNext: {
    borderTopWidth: 1,
    borderColor: "lightgray",
    paddingTop: 8,
    padding: 16
  },
  upNextTitle: {
    fontWeight: "bold",
    color: "gray"
  },
  thumbnail: {
    flexDirection: "row",
    marginTop: 16
  },
  thumbnailImage: {
    height: 100,
    width: 100
  },
  thumbnailContent: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    flex: 1,
    flexWrap: "wrap"
  },
  thumbnailTitle: {
    fontSize: 16
  },
  thumbnailChannel: {
    color: "gray"
  }
});
