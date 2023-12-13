import { Modal, View, Text, StyleSheet, Button } from "react-native";

const ModalDeleteConfirm = (prop) => {
  console.log(prop);
  const deletedTask = (prop) => {
    const filteredTasks = prop.tasks.filter(
      (task) => task.id != prop.taskSelected.id
    );
    prop.setVisibleModal(false);
    prop.setTasks(filteredTasks);
  };

  return (
    <Modal visible={prop.visibleModal}>
      <View style={styles.modalContainer}>
        <Text>Desea eliminar la tarea?</Text>
        <Text>Tarea : {prop.taskSelected.title} </Text>
        <View style={styles.btnContainer}>
          <Button title="Si" color="green" onPress={() => deletedTask(prop)} />
          <Button
            title="No"
            color="red"
            onPress={() => prop.setVisibleModal(false)}
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#999",
    alignItems: "center",
    padding: 50,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
export default ModalDeleteConfirm;
