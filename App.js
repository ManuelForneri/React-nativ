import { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const App = () => {
  const [products, setProducts] = useState([]);
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [onModal, setOnModal] = useState(false);

  const handlerAddProducts = () => {
    const newProduct = {
      id: Date.now(),
      price: priceProduct,
      title: titleProduct,
    };
    setProducts((current) => [...current, newProduct]);
    setTitleProduct("");
    setPriceProduct("");
    console.log(products);
  };
  const openDeletedModal = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Producto"
          onChangeText={(t) => setTitleProduct(t)}
        />
        <TextInput
          style={styles.input}
          placeholder="Precio"
          onChangeText={(t) => setPriceProduct(t)}
        />
        <Button title="ADD" onPress={handlerAddProducts} />
      </View>
      <View style={styles.listContainer}>
        {products.map((prod) => (
          <View key={prod.id} style={styles.cardProduct}>
            <Text>{prod.title}</Text>
            <Text>${prod.price}</Text>
            <Button title="Del" onPress={openDeletedModal} />
          </View>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    marginTop: 25,
  },
  input: {
    width: "30%",
    borderWidth: 1,
    padding: 4,
  },
  inputContainer: {
    gap: 10,
    width: "100%",
    flexDirection: "row",
    marginBottom: 20,
    margin: "auto",
    justifyContent: "center",
  },
  listContainer: {
    width: "100%",
    alignItems: "center",
  },
  cardProduct: {
    flexDirection: "row",
    gap: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    borderWidth: 1,
  },
});
export default App;
