import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = ({ title = "Prueba" }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4668B3",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
