import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import ItemListCategories from "../Screens/ItemListCategories";
import ItemDetail from "../Screens/ItemDetail";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Category" component={ItemListCategories} />
      <Stack.Screen name="Product" component={ItemDetail} />
    </Stack.Navigator>
  );
};

export default ShopStack;
