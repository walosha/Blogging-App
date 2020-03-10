import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import Header from "../resources/Header";
import Loader from "../resources/Loader";
import SearchResults from "./SearchResults";
import { search } from "../seachData";

function SearchResultsScreen({ navigation }) {
  const tabText = {
    borderBottomWidth: 3,
    borderBottomColor: "red",
    padding: 6,
    fontSize: 15,
    fontWeight: "bold"
  };

  const [isTabSet, setTab] = useState({ News: true, Video: false });
  const [loading, setLoading] = useState(false);
  const [searchResponse, setSearchResponse] = useState([]);

  function onSearchInput(searchInput) {
    setLoading(true);
    setTimeout(function() {
      const result = search(searchInput);
      setSearchResponse(result);
      setLoading(false);
    }, 3000);
  }

  function onTabPress(type) {
    setTab({ News: false, Video: false, [type]: true });
  }

  function renderContent() {
    if (isTabSet.News) {
      return (
        <ScrollView style={{ padding: 10 }}>
          {searchResponse.map((res, key) => (
            <SearchResults
              key={key}
              subtitle={res.subtitle}
              title={res.title}
              content={res.description}
            />
          ))}
        </ScrollView>
      );
    }
    return <SearchResults content="Check Our lastest Videos !!!" />;
  }

  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <View style={{ flex: 1 }}>
        <Header
          onSearchInput={onSearchInput}
          navigation={navigation}
          arrow
          route="Root"
        />
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => onTabPress("News")}>
            <Text style={isTabSet.News ? tabText : {}}>News</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onTabPress("Video")}>
            <Text style={isTabSet.Video ? tabText : {}}>Video</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {loading ? <Loader /> : renderContent()}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    paddingVertical: 25,
    alignItems: "center"
  }
});
export default SearchResultsScreen;
