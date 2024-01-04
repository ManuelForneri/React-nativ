import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/colors";

const CategoryItem = ({ item, navigation, route }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.category}
        onPress={() => navigation.navigate("Category", { category: item })}
      >
        <Text style={styles.text}>{item} </Text>
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
    borderWidth: 1,
    padding: 2,
    margin: 5,
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  text: {
    fontSize: 15,
    color: "#fff",
  },
});
