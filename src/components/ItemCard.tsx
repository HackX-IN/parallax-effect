import {
  Dimensions,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from "react-native";
import React from "react";
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/core";

interface Props {
  id?: number;
  image?: any;
}

interface Card {
  item: Props;
  index: number;
  scrollY: SharedValue<number>;
}
const { width, height } = Dimensions.get("screen");

export const ItemCard: React.FC<Card> = ({ item, index, scrollY }) => {
  const navigation = useNavigation<any>();
  const inputRange = [
    (index - 1) * height,
    index * height,
    (index + 1) * height,
  ];
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            inputRange,
            [-80, 0, 30],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });
  const AnimatedImage = Animated.createAnimatedComponent(Image);
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => navigation.navigate("id", { item: item.id })}
        style={{
          width: width * 0.9,
          height: height * 0.75,
          overflow: "hidden",
          alignItems: "center",
          borderRadius: 16,
        }}
      >
        <AnimatedImage
          source={item.image}
          style={[styles.image, animatedStyle]}
        />
        <Animated.Text
          sharedTransitionTag={`image-${item.id}`}
          style={{ display: "none" }}
        >
          hello
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  image: {
    width: width * 0.9,
    height: height * 0.7,
    borderRadius: 30,
  },
  shadow: {
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    shadowOpacity: 0.6,
    elevation: 20,
    backgroundColor: "#ffff",
    marginBottom: 16,
  },
});
