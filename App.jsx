import { StatusBar, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import TabNavigator from "./src/Navigation/TabNavigator";

const App = () => {
  const [fontLoaded] = useFonts({
    Josefin: require("./assets/fonts/JosefinSans-Bold.ttf"),
  });

  if (!fontLoaded) return null;

  return (
    <>
      <StatusBar />
      <TabNavigator />
    </>
  );
};
const styles = StyleSheet.create({});
export default App;
