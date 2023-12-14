import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import categories from "../Data/categories.json";
import CategoryItem from "./CategoryItem";
const Categories = ({ setCategorySelect }) => {
  return (
    <View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryItem setCategorySelect={setCategorySelect} item={item} />
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
