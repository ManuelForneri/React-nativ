import { View, Text, FlatList } from "react-native";
import React from "react";
import allCart from "../Data/cart.json";
import CartItem from "../Components/CartItem";
const Cart = () => {
  return (
    <FlatList
      data={allCart}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CartItem item={item} />}
    />
  );
};

export default Cart;
