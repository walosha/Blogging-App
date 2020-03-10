import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import { useNetInfo } from "@react-native-community/netinfo";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Header from "../resources/Header";
import OfflineScreen from "../screens/offlineScreen";
import OfflineNotice from "../resources/OfflineNotice";
import ScreenContent from "../resources/ScreenContent";
import SkeletonLoader from "../resources/SkeletonLoader";
import Loader from "../resources/Loader";

const ARTICLES_QUERY = gql`
  {
    ibrand {
      title
      url
      urlToImage
      publishedAt
    }
  }
`;

const headerHeight = null; //Adds up to 70. Albeit, i discovered setting height directly in RootScreen affects touchableOpacity of imported Header

export default function RootScreen({ navigation }) {
  const netinfo = useNetInfo();
  const scrollY = new Animated.Value(0);
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, 100);
  const headerY = Animated.interpolate(diffClampScrollY, {
    inputRange: [0, 70],
    outputRange: [0, -100]
  });

  return (
    <View style={{ backgroundColor: "#FFFFFF", height: "100%", width: "100%" }}>
      <View style={styles.pageContainer}>
        <Animated.View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: headerHeight,
            zIndex: 1000,
            elevation: 1000,
            transform: [{ translateY: headerY }]
          }}
        >
          <Header focus route="SearchResults" navigation={navigation} />
        </Animated.View>

        <Animated.View
          style={{ position: "relative" }}
          bounces={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: { contentOffset: { y: scrollY } }
            }
          ])}
        >
          <RenderContentFlatList navigation={navigation} />
        </Animated.View>
      </View>
      {netinfo.isConnected ? null : <OfflineNotice />}
    </View>
  );
}

const RenderContentFlatList = ({ navigation }) => {
  return (
    <Query query={ARTICLES_QUERY}>
      {({ loading, error, data, refetch, networkStatus }) => {
        if (loading) return <SkeletonLoader />;
        if (error) return <OfflineScreen refetch={refetch} />;
        return (
          <FlatList
            ListFooterComponent={() => (Loader ? <Loader /> : null)}
            refreshing={networkStatus === 4}
            onRefresh={() => refetch()}
            style={{ marginTop: 50, backgroundColor: "#F2F2F2" }}
            data={data.ibrand}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("WebView", item)}>
                <View style={{ height: 275, margin: 20 }}>
                  <ScreenContent item={item} />
                </View>
              </TouchableOpacity>
            )}
          />
        );
      }}
    </Query>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: 10
  }
});
