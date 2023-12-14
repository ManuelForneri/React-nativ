import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const TaskItem = ({ item }) => {
  return (
    <View style={styles.cardTask}>
      <Image
        style={styles.itemImage}
        resizeMode="cover"
        source={{ uri: item.thumbnail }}
      />
      <Text style={{ color: "#fff" }}>{item.title}</Text>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  cardTask: {
    backgroundColor: "#547DD6",
    flexDirection: "row",
    padding: 5,
    margin: 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemImage: {
    width: 50,
    height: 50,
  },
});
