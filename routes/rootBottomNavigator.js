//BOTTOM NAV TAB
import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import HomeStack from "../routes/homeStack";
import Explore from "../screens/Explore";
import Interest from "../screens/Interest";
import Account from "../screens/Account";
import UserScreen from "../screens/UserScreen";
import SignInForm from "../screens/SignInForm";
import SignUpForm from "../screens/SignUpForm";
import RefreshSpinner from "../resources/RefreshSpinner";

const styles = { textAlign: "center", fontSize: 12 };

const UnAutheticatedScreen = createStackNavigator({
  Account: {
    screen: Account,
    navigationOptions: {
      title: "Header",
      headerShown: false,
      safeAreaInsets: { top: "never", bottom: "never" }
    }
  },
  SignInForm: {
    screen: SignInForm,
    navigationOptions: {
      title: "Sign In",
      headerShown: false,
      safeAreaInsets: { top: "never", bottom: "never" }
    }
  },
  SignUpForm: {
    screen: SignUpForm,
    navigationOptions: {
      title: "Sign Out",
      headerShown: false,
      safeAreaInsets: { top: "never", bottom: "never" }
    }
  }
});

const AutheticatedScreen = createStackNavigator({
  UserScreen: {
    screen: UserScreen,
    navigationOptions: {
      title: "Account",
      headerShown: false,
      safeAreaInsets: { top: "never", bottom: "never" }
    }
  }
});

export default createBottomTabNavigator(
  {
    Refresh: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: ({ focused }) =>
          focused ? (
            <Text style={{ ...styles, color: "red" }}>Refresh</Text>
          ) : (
            <Text style={styles}>Home</Text>
          ),
        tabBarIcon: ({ tintColor, focused }) =>
          focused ? (
            <RefreshSpinner onRefresh={() => onRefresh("hello")} />
          ) : (
            <Ionicons color={tintColor} name="md-home" size={30}></Ionicons>
          )
      }),
      tabBarOnPress: () => {}
    },
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons
            color={tintColor}
            name="explore"
            size={30}
          ></MaterialIcons>
        )
      }
    },
    Interests: {
      screen: Interest,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons
            color={tintColor}
            name="add-to-queue"
            size={30}
          ></MaterialIcons>
        )
      }
    },
    Me: {
      screen: createSwitchNavigator(
        {
          Auth: UnAutheticatedScreen,
          UserAccount: AutheticatedScreen
        },
        {
          initialRouteName: "Auth"
        }
      ),
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons
            color={tintColor}
            name="person"
            size={30}
          ></MaterialIcons>
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "#000000",
      showLabel: true
    }
  }
);
