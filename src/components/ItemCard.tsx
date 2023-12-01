import { Dimensions, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { useNavigation } from "@react-navigation/core";

interface Props {
  id?: number;
  image?: string;
}

interface Card {
  item: Props;
  index: number;
  scrollY: SharedValue<number>;
}
const { width, height } = Dimensions.get("window");
const ITEM_WIDTH = height * 0.36;
const ITEM_HEIGHT = ITEM_WIDTH * 1.6;

export const ItemCard: React.FC<Card> = ({ item, scrollY, index }) => {
  const navigation = useNavigation<any>();
  const Input = [(index - 1) * height, index * height, (index + 1) * height];

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(scrollY.value, Input, [
      -height * 0.14,
      0,
      height * 0.25,
    ]);

    return {
      transform: [{ translateY: translateY }],
    };
  });
  return (
    <View style={styles.item}>
      <View style={styles.shadow}>
        <TouchableOpacity
          onPress={() => navigation.navigate("id", { item: item.id })}
          style={[
            styles.cover_image,
            { height: item.id === 5 ? ITEM_HEIGHT * 0.78 : ITEM_HEIGHT * 0.88 },
          ]}
        >
          <Animated.Image
            source={{ uri: item?.image }}
            style={[styles.image, animatedStyle]}
            resizeMethod={"auto"}
            resizeMode={"stretch"}
          />
          <Animated.Text
            sharedTransitionTag={`image-${item.id}`}
            style={{ color: "white", fontSize: 1 }}
          >
            Hello
          </Animated.Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.65,
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT * 1.3,
  },
  cover_image: {
    width: ITEM_WIDTH * 1,
    // height: ITEM_HEIGHT * 0.98,
    overflow: "hidden",
    alignItems: "center",
    borderRadius: 14,
  },
  shadow: {
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 50,
    shadowOpacity: 1,
    elevation: 5,
    backgroundColor: "#ffff",
  },
});
