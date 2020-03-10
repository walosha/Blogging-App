import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView as NativeWebView } from "react-native-webview";
import WebViewHeader from "../resources/WebViewHeader";
import WebViewFooter from "../resources/WebViewFooter";
import { useNetInfo } from "@react-native-community/netinfo";
import OfflineNotice from "../resources/OfflineNotice";

export default function WebView({ navigation }) {
  const netInfo = useNetInfo();
  const url = navigation.getParam("url");
  const domain = url.replace(/https?:\/\/(?:www\.)?/, "").split(".")[0];

  return (
    <View style={styles.container}>
      <WebViewHeader navigation={navigation} sourceLink={domain} />
      <OfflineNotice variant={netInfo.isConnected} />

      <NativeWebView source={{ uri: navigation.getParam("url") }} />
      <WebViewFooter source={navigation.state.params.url} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
