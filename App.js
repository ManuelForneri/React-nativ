import { useState } from "react";
import { View, StyleSheet } from "react-native";
import TopBarTask from "./src/Components/TopBarTask.js";
import ModalDeleteConfirm from "./src/Components/ModalDeleteConfirm.js";
import TaskList from "./src/Components/TaskList.js";
import Header from "./src/Components/Header.js";
import Categories from "./src/Components/Categories.js";
import Home from "./src/Screens/Home.js";

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
    <View>
      {/* <Header />
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
      /> */}
      <Home />
    </View>
  );
};
const styles = StyleSheet.create({});
export default App;
