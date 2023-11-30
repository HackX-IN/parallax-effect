import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export const Header = ({
  color,
  iconColor,
}: {
  color: string;
  iconColor: string;
}) => {
  return (
    <View style={[styles.header, { backgroundColor: color ? color : "#fff" }]}>
      <Image
        src="https://cdn-icons-png.flaticon.com/128/9652/9652559.png"
        style={[styles.image, { tintColor: iconColor ? iconColor : "#0E86D4" }]}
      />
      <Image
        src="https://cdn-icons-png.flaticon.com/128/1/1443.png"
        style={[
          styles.psLogo,
          { tintColor: iconColor ? iconColor : "#0E86D4" },
        ]}
      />

      <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        <Ionicons
          name="cart"
          color={iconColor ? iconColor : "#0E86D4"}
          size={26}
        />
        <Ionicons
          name="search"
          color={iconColor ? iconColor : "#0E86D4"}
          size={26}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 14,
    padding: 8,
  },
  image: {
    width: 40,
    height: 40,
  },
  psLogo: {
    width: 40,
    height: 40,
    tintColor: "#0E86D4",
    flex: 1,
    resizeMode: "contain",
    marginLeft: 10,
  },
});
