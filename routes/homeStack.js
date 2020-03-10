//HOME STACK
import { createStackNavigator } from "react-navigation-stack";
import Hometabs from "../routes/hometopTabs";

const screens = {
  Root: {
    screen: Hometabs,
    navigationOptions: {
      title: "Root",
      headerShown: false,
      safeAreaInsets: { top: "never", bottom: "never" }
    }
  }
};

const HomeStack = createStackNavigator(screens);

export default HomeStack;
