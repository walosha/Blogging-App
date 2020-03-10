import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import moment, { ISO_8601 } from "moment";
import { textTruncate } from "../utils/index";

const ScreenContent = React.memo(function({ item }) {
  return (
    <View style={styles.individualContentBoard}>
      <Text style={styles.contentHeader}>{textTruncate(item.title)}</Text>
      <Image source={{ uri: item.urlToImage }} style={styles.contentImage} />
      <View style={styles.contentStat}>
        <View style={styles.statContainer}>
          <View style={styles.informationFlex}>
            <Text style={{ color: "#767272" }}>{moment(item.publishedAt, ISO_8601).fromNow(true)}</Text>
          </View>
          <View style={styles.statIcons}>
            <MaterialIcons name="remove-red-eye" size={15} color="#767272" />
          </View>
          <View style={styles.informationFlex}>
            <Text style={styles.informationFlexText}>{item.views}</Text>
          </View>
          <View style={styles.statIcons}>
            <MaterialIcons name="mode-comment" size={15} color="#767272" />
          </View>
          <View style={styles.informationFlex}>
            <Text style={styles.informationFlexText}>{item.comments}</Text>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  individualContentBoard: {
    //paddingHorizontal: 10
  },
  contentHeader: {
    fontWeight: "bold",
    fontSize: 18
  },
  contentImage: {
    marginTop: 11,
    height: 200,
    width: "100%"
  },
  contentStat: {
    flex: 1,
    marginTop: 11
  },
  statContainer: {
    flexDirection: "row"
  },

  statIcons: {
    paddingRight: 3
  },
  informationFlex: {
    marginRight: 25
  },
  informationFlexText: {
    fontSize: 13
  }
});

export default ScreenContent;
