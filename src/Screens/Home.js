import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../Components/Header";
import Categories from "../Components/Categories";

const Home = () => {
  return (
    <>
      <Header title="Categorias" />
      <Categories />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
