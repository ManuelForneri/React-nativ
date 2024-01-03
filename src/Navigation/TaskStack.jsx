import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Task from "../Screens/Task";

const Stack = createNativeStackNavigator();

const TaskStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tareas" component={Task} />
    </Stack.Navigator>
  );
};

export default TaskStack;
