import { StatusBar, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import Navigator from "./src/Navigation/Navigator";

const App = () => {
  const [fontLoaded] = useFonts({
    Josefin: require("./assets/fonts/JosefinSans-Bold.ttf"),
  });

  if (!fontLoaded) return null;

  return (
    <>
      <StatusBar />
      <Navigator />
    </>
  );
};
const styles = StyleSheet.create({});
export default App;
