import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Header } from "../components/Header";
import Animated from "react-native-reanimated";
import { images } from "../data/Data";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { LinearGradient } from "expo-linear-gradient";

const { height } = Dimensions.get("window");

const SingleScreen = ({ route }: { route: any }) => {
  const { item: photo } = route.params;
  const navigation = useNavigation<any>();
  const listing = images.find((item) => item.id === photo);

  return (
    <View style={styles.container}>
      <Header color="#000" iconColor="#fff" />

      {/* LinearGradient at the top */}
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.gradientTop}
      />

      <Animated.Image
        source={{ uri: listing.image }}
        style={styles.image}
        sharedTransitionTag={`image-${photo}`}
      />

      {/* LinearGradient at the bottom */}
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={styles.gradientBottom}
      />

      <View style={styles.actionRow}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.navigate}
        >
          <Ionicons name="chevron-back" size={29} color={"white"} />
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <View>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/4315/4315512.png",
            }}
            style={styles.icon}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Pre-order Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SingleScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  image: {
    resizeMode: "stretch",
    height: "78%",
    alignItems: "center",
    top: height * 0.02,
    borderRadius: 16,
  },
  gradientTop: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    height: height * 0.1,
    zIndex: 1,
  },
  gradientBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.5,
  },
  actionRow: {
    paddingHorizontal: 24,
    position: "absolute",
    flex: 1,
    top: height * 0.1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    alignSelf: "center",
    padding: 8,
    backgroundColor: "#0391F6",
    width: "80%",
    alignItems: "center",
    borderRadius: 8,
    marginTop: height * 0.06,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 15,
  },

  text: { color: "white", fontWeight: "700", fontSize: 16 },
  icon: { width: 48, height: 48, top: 15 },
  back: { color: "white", fontSize: 16, fontWeight: "bold" },
  navigate: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    zIndex: 2,
  },
});
