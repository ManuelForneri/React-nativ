import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AppHeader from "../Components/AppHeader";
import allProduct from "../Data/products.json";
const ItemDetail = ({ productDetail, setCategorySelect, setProductDetail }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const prodFind = allProduct.find((prod) => prod.id === productDetail);
    setProduct(prodFind);
  }, [productDetail]);
  return (
    <>
      <AppHeader
        title="ProductDetail"
        setCategorySelect={setCategorySelect}
        setProductDetail={setProductDetail}
      />
      <View>
        <Image
          style={styles.itemImage}
          resizeMode="center"
          source={{ uri: product.thumbnail }}
        />
      </View>
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>{product.price}</Text>
    </>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  itemImage: {
    width: "100%",
    height: 100,
  },
});
