import { View, StyleSheet, FlatList } from "react-native";
import CardTask from "./CardTask";

const TaskList = (prop) => {
  return (
    <View style={styles.listTaskcontainer}>
      <FlatList
        data={prop.tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardTask
            item={item}
            setVisibleModal={prop.setVisibleModal}
            setTaskSelected={prop.setTaskSelected}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  listTaskcontainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default TaskList;
