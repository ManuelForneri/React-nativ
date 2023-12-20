import { useState } from "react";
import { View, StyleSheet } from "react-native";
import TopBarTask from "./src/Components/TopBarTask";
import ModalDeleteConfirm from "./src/Components/ModalDeleteConfirm";
import TaskList from "./src/Components/TaskList";

import Categories from "./src/Components/Categories";
import Home from "./src/Screens/Home";
import ItemListCategories from "./src/Screens/ItemListCategories";
import { useFonts } from "expo-font";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [taskSelected, setTaskSelected] = useState({});
  const [newTaskName, setNewTaskName] = useState("");

  const [categorySelect, setCategorySelect] = useState("");

  const [fontLoaded] = useFonts({
    Josefin: require("./assets/fonts/JosefinSans-Bold.ttf"),
  });

  if (!fontLoaded) return null;

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
        <ItemListCategories
          categorySelect={categorySelect}
          setCategorySelect={setCategorySelect}
        />
      ) : (
        <Home setCategorySelect={setCategorySelect} />
      )}

      {/* <ItemListCategories /> */}
    </View>
  );
};
const styles = StyleSheet.create({});
export default App;
