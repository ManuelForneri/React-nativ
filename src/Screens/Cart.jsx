import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import allCart from "../Data/cart.json";
import CartItem from "../Components/CartItem";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCart(allCart);
    const total = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotal(total);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <Text style={styles.total}>Total: ${total}</Text>
      <Pressable style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirmar compra</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  flatList: {
    width: "100%",
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  confirmButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Cart;
