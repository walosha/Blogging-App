//TOP TAB NAV
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import RootScreen from "../screens/RootScreen";
import NewsSection from "../screens/NewsSection";
import VideoSection from "../screens/VideoSection";

export default Hometabs = createMaterialTopTabNavigator(
  {
    Recommended: {
      screen: RootScreen,
      navigationOptions: {
        title: "Home"
      }
    },
    News: {
      screen: NewsSection
    },
    Videos: {
      screen: VideoSection
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: 24,
        backgroundColor: "#FF0000"
      }
    }
  }
);
