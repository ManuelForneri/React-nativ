import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <Button title="ADD" />
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
    width: 200,
    borderWidth: 1,
  },
  inputContainer: {
    flexDirection: "row",
  },
});
export default App;
