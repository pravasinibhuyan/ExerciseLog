import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

function RestScreen() {
  const [counter, setCounter] = useState(4);
  const navigation = useNavigation();

  useEffect(() => {
    if (counter === 0) {
      navigation.goBack();
      return;
    }

    const timer = setTimeout(() => {
      setCounter((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [counter, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: "https://us.123rf.com/450wm/studiolaut/studiolaut1606/studiolaut160600042/59064478-women-hydration.jpg?ver=6",
          }}
          style={styles.img}
        />
      </View>
      <Text style={styles.title}>TAKE A BREAK</Text>
      <Text style={styles.title}>{counter}</Text>
    </SafeAreaView>
  );
}
export default RestScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // backgroundColor: "#ececec",
    backgroundColor: "#f5f5f5",
    height: "100%",
    marginTop: 40,
  },
  title: {
    marginTop: 30,
    color: "#2a5c91",
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
  },
  imgContainer: {
    height: 450,
    width: "100%",
  },
  img: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
