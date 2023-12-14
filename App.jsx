import { useState } from "react";
import { View, StyleSheet } from "react-native";
import TopBarTask from "./src/Components/TopBarTask";
import ModalDeleteConfirm from "./src/Components/ModalDeleteConfirm";
import TaskList from "./src/Components/TaskList";
import Header from "./src/Components/Header";
import Categories from "./src/Components/Categories";
import Home from "./src/Screens/Home";
import ItemListCategories from "./src/Screens/ItemListCategories";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [taskSelected, setTaskSelected] = useState({});
  const [newTaskName, setNewTaskName] = useState("");

  const [categorySelect, setCategorySelect] = useState("");

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
      {categorySelect ? (
        <ItemListCategories categorySelect={categorySelect} />
      ) : (
        <Home setCategorySelect={setCategorySelect} />
      )}

      {/* <ItemListCategories /> */}
    </View>
  );
};
const styles = StyleSheet.create({});
export default App;
