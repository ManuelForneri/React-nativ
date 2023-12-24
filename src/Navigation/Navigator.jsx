import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeBar from "../Components/HomeBar";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouterName="Home"
        screenOptions={({ route }) => {
          return {
            header: () => {
              return <HomeBar />;
            },
          };
        }}
      >
        <Stack.Screen />
        <Stack.Screen />
        <Stack.Screen />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
