import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import TaskStack from "./TaskStack";
import { StyleSheet } from "react-native";
import { colors } from "../Global/colors";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="ShopScreen"
          component={ShopStack}
          options={{
            tabBarIcon: () => <Entypo name="shop" size={24} color="white" />,
          }}
        />
        <Tab.Screen
          name="CartScreen"
          component={CartStack}
          options={{
            tabBarIcon: () => (
              <AntDesign name="shoppingcart" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="TaskScreen"
          component={TaskStack}
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="tasks" size={24} color="white" />
            ),
          }}
        />
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
