import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Tab from "./Tab";

const UserAccount = ({
  navigation,
  following,
  followers,
  post,
  name,
  image
}) => {
  console.log(following, followers, post, name);
  return (
    <View>
      <View style={styles.userAccount}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.detailBox}>
          <View style={styles.followerBox}>
            <View style={styles.box}>
              <Text style={styles.count}>{following}</Text>
              <Text style={styles.countText}>Following</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.count}>{followers}</Text>
              <Text style={styles.countText}>Followers</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.count}>{post}</Text>
              <Text style={styles.countText}>Post</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonBox}>
            <Text style={styles.btn}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.userNameBox}>
        <Text style={styles.userName}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    height: 69,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    borderColor: "#e5e5e5",
    borderWidth: 1,
    marginTop: 12
  },
  signOutText: {
    backgroundColor: "red",
    paddingHorizontal: 26,
    paddingVertical: 10,
    color: "#fff",
    fontWeight: "bold",
    borderRadius: 7,
    elevation: 4
  },
  userAccount: {
    flexDirection: "row",
    marginTop: 16,
    padding: 10
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  detailBox: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  followerBox: {
    flexDirection: "row",
    padding: 19,
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  count: {
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  countText: {
    fontSize: 10
  },
  buttonBox: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  btn: {
    color: "#fff",
    fontSize: 13,
    backgroundColor: "red",
    padding: 10,
    flex: 1,
    textAlign: "center",
    borderRadius: 19
  },
  userNameBox: {
    padding: 20
  },
  userName: {
    fontSize: 17,
    fontWeight: "bold"
  }
});

export default UserAccount;
