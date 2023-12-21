import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleFont}>Home</Text>
      </View>
    </View>
  );
};

export default HomeBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4668B3",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleFont: {
    fontFamily: "Josefin",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  backIcon: {
    paddingLeft: 10,
  },
});
