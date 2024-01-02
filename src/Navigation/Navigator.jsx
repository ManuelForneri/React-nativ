import { NavigationContainer } from "@react-navigation/native";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="ShopScreen" component={ShopStack} />
        <Tab.Screen name="CartScreen" component={CartStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
