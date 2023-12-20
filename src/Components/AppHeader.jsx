import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AppHeader = ({
  title = "Prueba",
  setCategorySelect,
  setProductDetail,
}) => {
  const resetFilters = () => {
    setProductDetail(0);
    setCategorySelect("");
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.backIcon} onPress={() => resetFilters()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </Pressable>
      <View style={styles.titleContainer}>
        <Text style={styles.titleFont}>{title}</Text>
      </View>
    </View>
  );
};

export default AppHeader;

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
