import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import Animated from "react-native-reanimated";
import { useNetInfo } from "@react-native-community/netinfo";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import HeaderNavigation from "../resources/HeaderNavigation";
import OfflineNotice from "../resources/OfflineNotice";
import ScreenContent from "../resources/ScreenContent";
import OfflineScreen from "../screens/offlineScreen";

const ARTICLES_QUERY = gql`
  query RootQuery {
    others {
      title
      url
      urlToImage
      publishedAt
    }
  }
`;

const headerHeight = null;

export default function ExploreScreen({ navigation }) {
  const netinfo = useNetInfo();
  const scrollY = new Animated.Value(0);
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, 100);
  const headerY = Animated.interpolate(diffClampScrollY, {
    inputRange: [0, 70],
    outputRange: [0, -100]
  });
  let { params } = navigation.state;
  params = typeof params === "object" ? Object.values(params).join("") : params;

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
          <HeaderNavigation
            color
            navigation={navigation}
            route="Explore"
            headerText={`${params}  News`}
          />
        </Animated.View>

        <Animated.View
          bounces={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: { contentOffset: { y: scrollY } }
            }
          ])}
        >
          {renderContentFlatList(navigation)}
        </Animated.View>
      </View>
      {netinfo.isConnected ? null : <OfflineNotice />}
    </View>
  );
}

function renderContentFlatList(navigation) {
  return (
    <Query query={ARTICLES_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <Text>Loading ...</Text>;
        if (error) return <OfflineScreen />;
        return (
          <FlatList
            style={{ marginTop: 50, backgroundColor: "#F2F2F2" }}
            data={data.others}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("WebView", item)}
              >
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
}

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: 10
  }
});
