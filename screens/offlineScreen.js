import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SkelentonLoader from "../resources/SkeletonLoader";

export default function OfflineScreen({ refetch }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  function onButtonPress() {
    setLoading(true);
    refetch();
  }

  if (loading) {
    return <SkelentonLoader />;
  } else {
    return (
      <View style={styles.offlineContainer}>
        <Text style={styles.offlineText}>Can't connect to the Internet</Text>
        <TouchableOpacity onPress={onButtonPress} style={styles.offlineButton}>
          <Text style={styles.text}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    alignItems: "center",
    marginTop: 120
  },
  offlineText: {
    fontWeight: "bold",
    padding: 19,
    fontSize: 17
  },
  offlineButton: {
    paddingVertical: 13,
    paddingHorizontal: 25,
    backgroundColor: "red",
    borderRadius: 4,
    elevation: 4
  },
  text: {
    color: "#fff",
    backgroundColor: "transparent"
  }
});
