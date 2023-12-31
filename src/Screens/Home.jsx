import React from "react";
import { StyleSheet } from "react-native";
import Categories from "../Components/Categories";
import AppHeader from "../Components/AppHeader";

const Home = ({ navigation, route }) => {
  return (
    <>
      <Categories navigation={navigation} route={route} />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
