import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import BottomTabNavigator from "../routes/rootBottomNavigator";
import WebView from "../screens/WebView";
import ExploreScreen from "../screens/ExploreScreen";
import VideoSectionMusic from "../screens/VideoSectionMusic";
import VideoReelPlayer from "../screens/VideoReelPlayer";
import Comments from "../screens/Comments";
import SearchResultsScreen from "../screens/SearchResultsScreen";

const screens = {
  Root: {
    screen: BottomTabNavigator,
    navigationOptions: {
      title: "Root",
      headerShown: false,
      safeAreaInsets: { top: "never", bottom: "never" }
    }
  },
  WebView: {
    screen: WebView,
    navigationOptions: {
      title: "WebView",
      headerShown: false,
      safeAreaInsets: { top: "never", bottom: "never" }
    }
  },
  MusicVideos: {
    screen: VideoSectionMusic,
    navigationOptions: {
      title: "Music Videos",
      headerShown: false,
      safeAreaInsets: { top: "never", bottom: "never" }
    }
  },
  VideoReelPlayer: {
    screen: VideoReelPlayer,
    navigationOptions: {
      title: "Reel Player",
      headerShown: false,
      safeAreaInsets: { top: "never", bottom: "never" }
    }
  },
  ExploreScreen: {
    screen: ExploreScreen,
    navigationOptions: {
      title: "Internationsl news",
      headerShown: false,
      safeAreaInsets: { top: "never", bottom: "never" }
    }
  },
  Comments: {
    screen: Comments,
    navigationOptions: {
      title: "Comments",
      headerShown: false,
      safeAreaInsets: { top: "never", bottom: "never" }
    }
  },

  SearchResults: {
    screen: SearchResultsScreen,
    navigationOptions: {
      headerShown: false,
      safeAreaInsets: { top: "never", bottom: "never" }
    }
  }
};

const RootStack = createStackNavigator(screens);

export default createAppContainer(RootStack);
