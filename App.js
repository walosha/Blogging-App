import React from "react";
import { StyleSheet, View } from "react-native";
import Navigator from "./routes/webViewConnector";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://192.168.8.100:5000/api"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Navigator />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  }
});

export default App;
