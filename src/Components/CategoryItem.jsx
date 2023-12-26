import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryItem = ({ item, navigation, route }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.category}
        onPress={() => navigation.navigate("Category", { item })}
      >
        <Text>{item} </Text>
      </Pressable>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  category: {
    color: "red",
    fontSize: 10,
    borderWidth: 1,
    padding: 2,
    margin: 5,
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
