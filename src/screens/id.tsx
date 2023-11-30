import { Dimensions, Image, View } from "react-native";
import React from "react";
import { Data } from "../data/Data";
import { Header } from "../components/Header";
import Animated from "react-native-reanimated";

const SingleScreen = ({ route }: { route: any }) => {
  const { width, height } = Dimensions.get("screen");
  const { item: photo } = route.params;
  console.log(photo);
  const listing = Data.find((item) => item.id === photo);

  return (
    <View style={{ flex: 1 }}>
      <Header color="#000" iconColor="#fff" />
      <Animated.Image
        source={listing.image}
        style={{ height: height, position: "absolute" }}
        sharedTransitionTag={`image-${photo}`}
      />
    </View>
  );
};
export default SingleScreen;
