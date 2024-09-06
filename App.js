import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  const addGoalToList = () => {
    setGoalsList((currentGoalsList) => [...currentGoalsList, goalText]);
    setGoalText("");
  };

  useEffect(() => {
    console.log("GOALS LIST", goalsList);
  }, [goalsList]);

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputCompContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            value={goalText}
            onChangeText={setGoalText}
            style={styles.textInput}
            placeholder="Your course goal"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={addGoalToList} title="Add goal" />
        </View>
      </View>
      <View style={{ paddingBottom: 16 }}>
        <FlatList
          data={goalsList}
          contentContainerStyle={{
            rowGap: 8,
          }}
          renderItem={(goalItem) => {
            return (
              <View style={styles.goalsTextContainer} key={goalItem.index}>
                <Text>{goalItem.item}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 16,
    rowGap: 16,
  },
  textInputContainer: {
    borderRadius: 3,
    flex: 1,
    borderWidth: 1,
    borderColor: "#cccccc",
    paddingHorizontal: 8,
    height: 32,
  },
  inputCompContainer: {
    flexDirection: "row",
    columnGap: 4,

    fontSize: 40,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    height: "100%",
  },
  buttonContainer: {
    height: 32,
    alignItems: "center",
    fontSize: 12,
  },

  // GOALS

  goalsTextContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#cccccc",

    borderRadius: 4,
  },
});
