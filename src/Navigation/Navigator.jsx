import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import Home from "../Screens/Home";
import ItemDetail from "../Screens/ItemDetail";
import ItemListCategories from "../Screens/ItemListCategories";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="Category" component={ItemListCategories} />
        <Stack.Screen name="product" component={ItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
