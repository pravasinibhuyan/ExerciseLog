import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useAtom } from "jotai";
import { calories, completed, minutes, workouts } from "../store/fitness";

function FitScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [complete, setComplete] = useAtom(completed);
  const [cal, setCal] = useAtom(calories);
  const [minute, setMinute] = useAtom(minutes);
  const [workout, setWorkout] = useAtom(workouts);

  const route = useRoute();
  const navigation = useNavigation();
  const exercises = route?.params?.exercises;
  const current = exercises[currentIndex];
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const index = prev !== 0 ? prev - 1 : prev;
      return index;
    });
  };
  const handleDone = (type) => {
    if (type === "done") {
      setComplete([...complete, current.name]);
      setWorkout(workout + 1);
      setCal(cal + 6.3);
      setMinute(minute + 2.5);
    }
    if (currentIndex === exercises.length - 1) {
      navigation.navigate("Home");
    } else {
      navigation.navigate("Rest");
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => {
          const index = prev !== exercises.length - 1 ? prev + 1 : prev;
          return index;
        });
      }, 3000);
    }
  };
  // console.log(current.name, "comple");
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={{ uri: current.img }} style={styles.img} />
        </View>
        <Ionicons
          name="arrow-back"
          size={28}
          color="black"
          style={{ position: "absolute", left: 20, top: 20 }}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{current.name}</Text>
          <Text
            style={[
              styles.title,
              { marginBottom: 10, textTransform: "lowercase" },
            ]}
          >
            x{current.sets}
          </Text>
          <Pressable disabled={currentIndex === 0}>
            <Text style={styles.btnDone} onPress={() => handleDone("done")}>
              DONE
            </Text>
          </Pressable>
        </View>
        <View style={styles.btnContainer}>
          <Pressable>
            <Text
              style={[
                styles.btn,
                { backgroundColor: currentIndex === 0 ? "gray" : "#228B22" },
              ]}
              onPress={handlePrev}
            >
              PREV
            </Text>
          </Pressable>
          <Pressable>
            <Text style={styles.btn} onPress={() => handleDone("skip")}>
              SKIP
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
}
export default FitScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#efefef",
    height: "100%",
    marginTop: 40,
  },
  title: {
    // color: "#2a5c91",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
    margin: 5,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imgContainer: {
    height: 400,
    width: "100%",
    // padding: 20,
  },
  img: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btnDone: {
    padding: 10,
    width: 200,
    textAlign: "center",
    backgroundColor: "#003366",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: 20,
    fontSize: 15,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
  },
  btn: {
    width: 70,
    backgroundColor: "#228B22",
    textAlign: "center",
    color: "#fff",
    fontSize: 12,
    padding: 10,
    borderRadius: 20,
    fontWeight: "bold",
  },
});
