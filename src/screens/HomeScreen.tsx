import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "@/src/components/Header";
import { ItemCard } from "@/src/components/ItemCard";
import { Data, DataItem } from "@/src/data/Data";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

const HomeScreen: React.FC = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <View style={styles.container}>
      <Header color="white" iconColor="#0E86D4" />

      <Animated.FlatList
        data={Data}
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
        renderItem={({ item, index }: { item: DataItem; index: number }) => (
          <ItemCard item={item} index={index} scrollY={scrollY} />
        )}
        contentContainerStyle={{ paddingBottom: 80, paddingTop: 18 }}
        keyExtractor={(item) => item.id.toString()}
        onScroll={scrollHandler}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerTitle: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
    marginBottom: 8,
  },
  text: {
    textAlign: "center",
  },
});
