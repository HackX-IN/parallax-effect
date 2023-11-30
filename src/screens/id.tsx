import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import { Header } from "../components/Header";
import Animated from "react-native-reanimated";
import { images } from "../data/Data";

const { height } = Dimensions.get("window");

const SingleScreen = ({ route }: { route: any }) => {
  const { item: photo } = route.params;
  console.log(photo);
  const listing = images.find((item) => item.id === photo);

  return (
    <View style={styles.container}>
      <Header color="#000" iconColor="#fff" />
      <Animated.Image
        source={{ uri: listing.image }}
        style={styles.image}
        sharedTransitionTag={`image-${photo}`}
      />
    </View>
  );
};
export default SingleScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  image: { width: "100%", height: height * 0.9, alignSelf: "center" },
});
