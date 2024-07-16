import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { completed } from "../store/fitness";
import { useAtom } from "jotai";

function WorkoutScreen() {
  const [complete, setComplete] = useAtom(completed);
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <>
      <View style={styles.bannerContainer}>
        <Image source={{ uri: route.params.image }} style={styles.banner} />
      </View>
      <Text
        style={{
          position: "absolute",
          top: 190,
          left: 150,
          textAlign: "center",
          color: "#fff",
          fontWeight: "bold",
          fontSize: 20,
          textTransform: "uppercase",
        }}
      >
        {route.params.title}
      </Text>
      <Ionicons
        name="arrow-back"
        size={28}
        color="white"
        style={{ position: "absolute", left: 20, top: 70 }}
        onPress={() => navigation.goBack()}
      />

      <ScrollView style={styles.container}>
        {route.params.exercises.map((item) => (
          <Pressable key={item.name} style={styles.card}>
            <View style={styles.imgContainer}>
              <Image source={{ uri: item.img }} style={styles.img} />
            </View>
            <View style={styles.content}>
              <View>
                <Text style={[styles.title1, { color: "#2a5c91" }]}>
                  {item.name}
                </Text>
                <Text style={styles.title2}>x{item.sets}</Text>
                <Text style={styles.title2}>Time {item.time}</Text>
                <Text style={styles.title2}>Calories {item.calories}</Text>
              </View>
              <View>
                {complete.includes(item.name) ? (
                  <AntDesign name="checkcircle" size={24} color="green" />
                ) : null}
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      <View style={{ backgroundColor: "#fff" }}>
        <Pressable
          style={styles.btn}
          onPress={() => {
            navigation.navigate("FitScreen", {
              exercises: route.params.exercises,
            });
            setComplete([]);
          }}
        >
          <Text style={styles.btnText}>START</Text>
        </Pressable>
      </View>
    </>
  );
}
export default WorkoutScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  bannerContainer: {
    backgroundColor: "#000",
    height: 200,
    marginTop: 50,
  },
  banner: {
    height: "100%",
    width: "100%",
    opacity: 0.6,
  },
  card: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 5,
    gap: 20,
    borderRadius: 10,
  },
  content: {
    width: "53%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  imgContainer: {
    height: 140,
    width: 150,
  },
  img: {
    height: "100%",
    width: "100%",
  },
  title1: {
    fontWeight: "bold",
    color: "grey",
    fontSize: 18,
  },
  title2: {
    fontWeight: "bold",
    color: "grey",
    fontSize: 14,
    marginTop: 5,
  },
  btn: {
    backgroundColor: "#003366",
    padding: 22,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
