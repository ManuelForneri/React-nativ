import { useState } from "react";
import { View, StyleSheet } from "react-native";
import TopBarTask from "./src/components/TopBarTask.js";
import ModalDeleteConfirm from "./src/components/ModalDeleteConfirm.js";
import TaskList from "./src/components/TaskList.js";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [taskSelected, setTaskSelected] = useState({});
  const [newTaskName, setNewTaskName] = useState("");

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      name: newTaskName,
      date: Date.now(),
    };

    setTasks((current) => [...current, newTask]);
    setNewTaskName("");
  };

  return (
    <View style={styles.container}>
      <TopBarTask setNewTaskName={setNewTaskName} addTask={addTask} />
      <TaskList
        tasks={tasks}
        setVisibleModal={setVisibleModal}
        setTaskSelected={setTaskSelected}
      />
      <ModalDeleteConfirm
        taskSelected={taskSelected}
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
        tasks={tasks}
        setTasks={setTasks}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
export default App;
