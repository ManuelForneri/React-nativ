import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../Global/colors";

const CartItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemDetails}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.brand}>Cantidad: {item.quantity}</Text>
        <Text style={styles.price}>$ {item.price}</Text>
        <Image
          style={[styles.itemImage, { borderRadius: 10 }]}
          resizeMode="cover"
          source={{ uri: item.thumbnail }}
        />
      </View>
      <Entypo name="trash" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.lightblue,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemDetails: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  brand: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});

export default CartItem;
