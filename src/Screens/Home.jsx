import React from "react";
import { StyleSheet } from "react-native";
import Categories from "../Components/Categories";
import HomeBar from "../Components/HomeBar";

const Home = ({ setCategorySelect }) => {
  return (
    <>
      <HomeBar />
      <Categories setCategorySelect={setCategorySelect} />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
