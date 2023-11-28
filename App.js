import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <Button title="ADD" />
      </View>
      <View style={styles.listContainer}>
        <View style={styles.cardProduct}>
          <Text>Coca cola</Text>
          <Text>$1000</Text>
          <Button title="Del" />
        </View>
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
    width: "70%",
    borderWidth: 1,
    padding: 4,
  },
  inputContainer: {
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
