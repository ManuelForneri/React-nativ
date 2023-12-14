import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../Components/Header";
import Categories from "../Components/Categories";

const Home = ({ setCategorySelect }) => {
  return (
    <>
      <Header title="Home" />
      <Categories setCategorySelect={setCategorySelect} />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
