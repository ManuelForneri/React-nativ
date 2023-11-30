import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
  Modal,
} from "react-native";

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
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cardProduct}>
              <Text>{item.title}</Text>
              <Text>${item.price}</Text>
              <Button title="Del" onPress={openDeletedModal} />
            </View>
          )}
        />
      </View>
      <Modal>
        <View style={styles.modalContainer}>
          <Text>Esta seguro que quiere eliminar el producto</Text>
          <Button color="green" title="Yes" />
          <Button color="red" title="no" />
        </View>
      </Modal>
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
    width: "90%",
    borderWidth: 1,
  },
  modalContainer: {
    backgroundColor: "#bbb",
    padding: 30,
    gap: 10,
  },
});
export default App;
