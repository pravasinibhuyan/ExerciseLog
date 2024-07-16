import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { fitnessData } from "./Data/fitnessData";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function FitnessCard() {
  const navigation = useNavigation();
  return (
    <View style={{ alignItems: "center" }}>
      {fitnessData.map((item) => (
        <Pressable
          key={item.id}
          style={{
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
            backgroundColor: "#000",
            height: 140,
            width: "90%",
            borderRadius: 7,
          }}
          onPress={() =>
            navigation.navigate("WorkoutScreen", {
              image: item.img,
              exercises: item.exercises,
              id: item.id,
              title: item.name,
            })
          }
        >
          <Image
            source={{ uri: item.img }}
            style={{
              height: "100%",
              width: "100%",
              opacity: 0.7,
              borderRadius: 7,
            }}
          />
          <Text style={styles.title}>{item.name}</Text>
          <MaterialCommunityIcons
            name="lightning-bolt"
            size={24}
            color="white"
            style={styles.icon}
          />
        </Pressable>
      ))}
    </View>
  );
}
export default FitnessCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  title: {
    textTransform: "uppercase",
    position: "absolute",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    left: 20,
    top: 20,
  },
  icon: {
    position: "absolute",
    left: 20,
    top: 100,
  },
});
