import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FitnessCard from "../components/fitnessCard";
import { calories, minutes, workouts } from "../store/fitness";
import { useAtomValue } from "jotai";

function HomeScreen() {
  const cal = useAtomValue(calories);
  const minute = useAtomValue(minutes);
  const workout = useAtomValue(workouts);
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}> WORKOUT</Text>
          <View style={styles.content}>
            <View>
              <Text style={styles.title}>{workout}</Text>
              <Text style={styles.contentText}>WORKOUTS</Text>
            </View>
            <View>
              <Text style={styles.title}>{cal}</Text>
              <Text style={styles.contentText}>KCAL</Text>
            </View>
            <View>
              <Text style={styles.title}>{minute}</Text>
              <Text style={styles.contentText}>MINS</Text>
            </View>
          </View>
          <FitnessCard />
        </View>
      </ScrollView>
    </>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#ececec",
    height: "100%",
    marginTop: 50,
  },
  title: {
    color: "#2a5c91",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  contentText: {
    color: "#2a5c91",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 12,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  img: {
    alignItems: "center",
    justifyContent: "center",
  },
});
