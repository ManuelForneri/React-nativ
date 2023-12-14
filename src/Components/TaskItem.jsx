import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TaskItem = ({ item }) => {
  return (
    <View style={styles.cardTask}>
      <Text style={{ color: "#fff" }}>{item.title}</Text>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  cardTask: {
    backgroundColor: "#547DD6",
    padding: 5,
    margin: 2,
    alignItems: "center",
  },
});
