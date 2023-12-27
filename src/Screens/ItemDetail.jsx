import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AppHeader from "../Components/AppHeader";
import allProduct from "../Data/products.json";

const ItemDetail = ({ route }) => {
  const { id } = route.params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const prodFind = allProduct.find((prod) => prod.id === id);
    setProduct(prodFind);
  }, [id]);

  return (
    <View style={styles.container}>
      <AppHeader title="ProductDetail" />
      <View style={styles.contentContainer}>
        <Image
          style={styles.itemImage}
          resizeMode="center"
          source={{ uri: product.thumbnail }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </View>
      <Pressable style={styles.btnCompra}>
        <Text style={styles.btnText}>Comprar ahora</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    width: "100%",
    alignItems: "center",
    maxWidth: 500,
  },
  itemImage: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    width: "100%",
    padding: 10,
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnCompra: {
    backgroundColor: "#4668B3",
    padding: 10,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  btnText: {
    color: "#fff",
  },
});

export default ItemDetail;
