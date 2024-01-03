import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import TaskStack from "./TaskStack";
import { StyleSheet } from "react-native";
import { colors } from "../Global/colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar }}
      >
        <Tab.Screen name="ShopScreen" component={ShopStack} />
        <Tab.Screen name="CartScreen" component={CartStack} />
        <Tab.Screen name="TaskScreen" component={TaskStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.secondary,
    elevation: 4,
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
});
export default TabNavigator;
