import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
function GetStarted({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require("../assets/image2.png")}
        style={styles.img}
        resizeMode="cover"
      > */}
      <View style={styles.content}>
        <Text style={styles.title}>Supporting your health journey</Text>
        <Text style={styles.subtitle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.push("Home")}
        >
          <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
}
export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003366",
  },
  img: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    opacity: 0.4,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 30,
    color: "#ececec",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 15,
    color: "#ececec",
    width: "80%",
  },
  btn: {
    marginTop: 25,
    backgroundColor: "#fff",
    padding: 10,
    width: "60%",
    borderRadius: 12,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    color: "#2a5c91",
  },
});
