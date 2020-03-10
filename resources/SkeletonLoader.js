import React from "react";
import { StyleSheet, Image, ScrollView } from "react-native";
import { Placeholder, PlaceholderLine, Shine } from "rn-placeholder";

const loaders = [1, 2, 3, 4];

const SkeletonLoader = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      {loaders.map((_, key) => (
        <Placeholder style={styles.container} key={key} Animation={Shine}>
          <PlaceholderLine />
          <PlaceholderLine />
          <PlaceholderLine width={80} />
          <Image
            style={{ marginTop: 11, height: 200, width: "100%" }}
            source={require("../assets/Default_Image_Thumbnail.png")}
          />
        </Placeholder>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 30
  },
  container: {
    paddingVertical: 5,
    paddingHorizontal: 8
  }
});
export default SkeletonLoader;
