import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import InterestsCard from "../resources/InterestsCard";
import HeaderNavigation from "../resources/HeaderNavigation";

const interests = [
  {
    cardTitle: "Nigeria",
    text: "Breaking News, crimes and North",
    image: require("../assets/space.jpg")
  },
  {
    cardTitle: "Entertainment",
    text: "Musical gossips and charts",
    image: require("../assets/davido.png")
  },
  {
    cardTitle: "Politics",
    text: "Poitical analysis, elections and government ",
    image: require("../assets/soyinka.jpg")
  },
  {
    uuid: "100",
    cardTitle: "Elon Musk",
    text: "Elon Musk, SpaceX, Tesla, Boring Company",
    image: require("../assets/space.jpg")
  },
  {
    uuid: "200",
    cardTitle: "United States",
    text: "Donald Trump, Democrats, Repulican, USA",
    image: require("../assets/davido.png")
  }
];

const editableInterests = [
  {
    uuid: "300",
    cardTitle: "Tony Elumelu",
    text: "TefConnect, UBA, Africapitalism",
    image: require("../assets/soyinka.jpg")
  }
];

export default function Interest({ navigation }) {
  const [addActive, setAddActive] = useState(true);
  const [editActive, setEditActive] = useState(false);
  const [editInterests, setEditInterest] = useState(editableInterests);
  const [interest, setInterest] = useState(interests);

  const setButtonActive = choicedButton => {
    if (choicedButton == "add") {
      setAddActive(true);
      setEditActive(false);
    } else {
      setEditActive(true);
      setAddActive(false);
    }
  };

  function removeInt(item) {
    const neweditInterests = interest.filter(
      editInterest => editInterest.cardTitle !== item.cardTitle
    );
    setInterest([...neweditInterests]);
    setEditInterest([...editInterests, item]);
  }

  function addInt(item) {
    const neweditInterests = editInterests.filter(
      editInterest => editInterest.cardTitle !== item.cardTitle
    );
    setEditInterest([...neweditInterests]);
    setInterest([...interest, item]);
  }

  return (
    <View style={styles.container}>
      <HeaderNavigation
        route="Root"
        navigation={navigation}
        headerText="Your Interest"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setButtonActive("add")}>
          <Text
            style={
              addActive ? styles.addButtonActive : styles.addButtonInactive
            }
          >
            Interests
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setButtonActive("edit")}>
          <Text
            style={
              editActive ? styles.editButtonActive : styles.editButtonInActive
            }
          >
            Add Interests
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.mainContainer}>
        {addActive
          ? interest.map(interestsProps => (
              <InterestsCard
                onPress={() => removeInt(interestsProps)}
                remove={true}
                key={Math.random()}
                {...interestsProps}
              />
            ))
          : editInterests.map(interestsProps => {
              const { image, cardTitle, text } = interestsProps;
              return (
                <InterestsCard
                  onPress={() => addInt(interestsProps)}
                  remove={false}
                  key={Math.random()}
                  image={image}
                  cardTitle={cardTitle}
                  text={text}
                />
              );
            })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2"
  },
  headerContainer: {
    paddingTop: 35,
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  headerText: {
    marginLeft: 30,
    width: "50%",
    textAlign: "center",
    paddingTop: 5,
    fontSize: 19,
    paddingBottom: 9,
    fontWeight: "bold"
  },
  buttonContainer: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "center"
  },
  mainContainer: {
    paddingVertical: 9,
    paddingHorizontal: 17
  },
  addButtonActive: {
    width: 170,
    height: 32,
    color: "#FFFFFF",
    borderTopLeftRadius: 11,
    borderBottomLeftRadius: 11,
    textAlign: "center",
    paddingVertical: 5,
    backgroundColor: "#FF0000",
    fontSize: 15
  },
  addButtonInactive: {
    width: 170,
    height: 32,
    color: "#FF0000",
    borderTopLeftRadius: 11,
    borderBottomLeftRadius: 11,
    textAlign: "center",
    paddingVertical: 5,
    backgroundColor: "#FFFFFF",
    fontSize: 15
  },
  editButtonInActive: {
    width: 170,
    height: 32,
    color: "#FF0000",
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
    textAlign: "center",
    paddingVertical: 5,
    backgroundColor: "#FFFFFF",
    fontSize: 15
  },
  editButtonActive: {
    width: 170,
    height: 32,
    color: "#FFFFFF",
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
    textAlign: "center",
    paddingVertical: 5,
    backgroundColor: "#FF0000",
    fontSize: 15
  }
});
