import { View, TextInput, Button, StyleSheet } from "react-native";
const TopBarTask = ({ setNewTaskName, addTask }) => {
  return (
    <View style={styles.containertopBar}>
      <TextInput
        style={styles.inputTask}
        placeholder="Tarea"
        onChangeText={(t) => setNewTaskName(t)}
      />
      <Button title="Añadir Tarea" onPress={addTask} />
    </View>
  );
};
const styles = StyleSheet.create({
  containertopBar: {
    gap: 20,
    padding: 20,
  },
  inputTask: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
});
export default TopBarTask;
