import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const TaskItem = ({ item, setProductDetail }) => {
  return (
    <Pressable
      style={styles.cardTask}
      onPress={() => setProductDetail(item.id)}
    >
      <Image
        style={styles.itemImage}
        resizeMode="cover"
        source={{ uri: item.thumbnail }}
      />
      <Text style={{ color: "#fff" }}>{item.title}</Text>
    </Pressable>
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
