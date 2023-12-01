import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { DataItem, images } from "../data/Data";
import { ItemCard } from "../components/ItemCard";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { Header } from "../components/Header";

const data: DataItem[] = images.map((item) => ({
  id: item.id,
  image: item.image,
}));

export default function App() {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" translucent={false} />
      <Header color="white" iconColor="#0E86D4" />
      <Animated.FlatList
        ListHeaderComponent={() => (
          <View style={styles.headerTitle}>
            <Text
              style={[
                styles.text,
                { color: "#0E86D4", fontSize: 12, fontWeight: "700" },
              ]}
            >
              GREAT GAMES
            </Text>
            <Text
              style={[
                styles.text,
                { color: "#000", fontSize: 20, fontWeight: "400" },
              ]}
            >
              Coming Soon
            </Text>
          </View>
        )}
        data={data}
        pagingEnabled
        onScroll={scrollHandler}
        bounces={false}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          return <ItemCard item={item} index={index} scrollY={scrollY} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },
  text: {
    textAlign: "center",
  },
});
