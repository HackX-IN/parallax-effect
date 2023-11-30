import { Dimensions, View } from "react-native";
import React from "react";
import { Data } from "../data/Data";
import { Header } from "../components/Header";
import Animated from "react-native-reanimated";
const { height } = Dimensions.get("window");
const SingleScreen = ({ route }: { route: any }) => {
  const { item: photo } = route.params;
  console.log(photo);
  const listing = Data.find((item) => item.id === photo);

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <Header color="#000" iconColor="#fff" />
      <Animated.Image
        source={listing.image}
        style={{ width: "100%", height: height * 0.9, alignSelf: "center" }}
        sharedTransitionTag={`image-${photo}`}
        resizeMode={"contain"}
      />
    </View>
  );
};
export default SingleScreen;
