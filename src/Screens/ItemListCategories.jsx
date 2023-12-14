import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import allTasks from "../Data/products.json";
import TaskItem from "../Components/TaskItem";

const ItemListCategories = ({ categorySelect }) => {
  const [keyword, setKeyword] = useState("");
  const [tasks, setTasks] = useState(allTasks);

  useEffect(() => {
    if (categorySelect) {
      const taskCategory = allTasks.filter(
        (item) => item.category === categorySelect
      );
      const taskfiltered = taskCategory.filter((item) =>
        item.title.includes(keyword)
      );
      setTasks(taskfiltered);
    } else {
      const taskfiltered = allTasks.filter((item) =>
        item.title.includes(keyword)
      );
      setTasks(taskfiltered);
    }
  }, [keyword]);

  return (
    <>
      <Header title="ItemListCategories" />
      <SearchBar setKeyword={setKeyword} />
      <FlatList
        style={styles.container}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem item={item} />}
      />
    </>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
