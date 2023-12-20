import React from "react";
import { StyleSheet } from "react-native";
import AppHeader from "../Components/AppHeader";
import Categories from "../Components/Categories";

const Home = ({ setCategorySelect }) => {
  return (
    <>
      <AppHeader title="Home" setCategorySelect={setCategorySelect} />
      <Categories setCategorySelect={setCategorySelect} />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
