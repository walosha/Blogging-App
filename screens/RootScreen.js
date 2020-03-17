import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import Animated from "react-native-reanimated";
import { useNetInfo } from "@react-native-community/netinfo";
import { copilot, walkthroughable, CopilotStep } from "react-native-copilot";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Header from "../resources/Header";
import OfflineScreen from "../screens/offlineScreen";
import OfflineNotice from "../resources/OfflineNotice";
import ScreenContent from "../resources/ScreenContent";
import SkeletonLoader from "../resources/SkeletonLoader";
import Loader from "../resources/Loader";

const WalkthroughableView = walkthroughable(View);

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

const headerHeight = null;
const RootScreen = function(props) {
  const { navigation } = props;
  const netinfo = useNetInfo();
  const scrollY = new Animated.Value(0);
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, 100);
  const headerY = Animated.interpolate(diffClampScrollY, {
    inputRange: [0, 70],
    outputRange: [0, -100]
  });

  useEffect(() => {
    props.copilotEvents.on("stepChange", handleStepChange);
    props.start();
  }, []);

  const handleStepChange = step => {
    console.log(`Current step is: ${step.name}`);
  };

  return (
    <View style={{ backgroundColor: "#FFFFFF", height: "100%", width: "100%" }}>
      <View style={styles.pageContainer}>
        <Animated.View
          style={{
            ...styles.animatedViews,
            transform: [{ translateY: headerY }]
          }}
        >
          <CopilotStep
            text="This is the search Input for searching for news content!"
            order={1}
            name="openApp"
          >
            <WalkthroughableView>
              <Header focus route="SearchResults" navigation={navigation} />
            </WalkthroughableView>
          </CopilotStep>
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
};

const RenderContentFlatList = ({ navigation }) => {
  return (
    <Query query={ARTICLES_QUERY}>
      {({ loading, error, data, refetch, networkStatus }) => {
        if (loading) return <SkeletonLoader />;
        if (error)
          return (
            <CopilotStep
              text="This is the Try-Again button for loading screen"
              order={2}
              name="Loading Content"
            >
              <WalkthroughableView style={{ marginTop: 100 }}>
                <OfflineScreen refetch={refetch} />
              </WalkthroughableView>
            </CopilotStep>
          );
        return (
          <FlatList
            ListFooterComponent={() => (Loader ? <Loader /> : null)}
            refreshing={networkStatus === 4}
            onRefresh={() => refetch()}
            style={{ marginTop: 50, backgroundColor: "#F2F2F2" }}
            data={data.ibrand}
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
};

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: 10
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    height: 20,
    width: "100%"
  },
  tabItem: {
    flex: 1,
    textAlign: "center"
  },
  animatedViews: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: headerHeight,
    zIndex: 1000,
    elevation: 1000
  }
});

const style = {
  backgroundColor: "#fff",
  borderRadius: 15,
  paddingTop: 5
};

export default copilot({
  backdropColor: "rgba(50, 50, 100, 0.5)",
  tooltipStyle: style,
  overlay: "svg", // or 'view'
  animated: true // or false
})(RootScreen);
