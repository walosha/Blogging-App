import React from "react";
import { Text } from "react-native";
import ScrollableTabView, {
  DefaultTabBar
} from "react-native-scrollable-tab-view";

export default () => {
  return (
    <ScrollableTabView
      style={{ marginTop: 10, marginHorizontal: 17 }}
      initialPage={1}
      renderTabBar={() => <DefaultTabBar />}
      tabBarActiveTextColor="red"
      tabBarUnderlineStyle={{ borderColor: "red", borderWidth: 2 }}
    >
      <Text tabLabel="Post">No Post Yet</Text>
      <Text tabLabel="Inbox">You haven't received any message yet</Text>
    </ScrollableTabView>
  );
};
