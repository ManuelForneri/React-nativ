import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { useFonts } from "expo-font";
import Home from "./src/Screens/Home";
import ItemListCategories from "./src/Screens/ItemListCategories";
import ItemDetail from "./src/Screens/ItemDetail.jsx";

const App = () => {
  const [categorySelect, setCategorySelect] = useState("");
  const [productDetail, setProductDetail] = useState(0);
  const [fontLoaded] = useFonts({
    Josefin: require("./assets/fonts/JosefinSans-Bold.ttf"),
  });

  if (!fontLoaded) return null;

  return (
    <View>
      {categorySelect ? (
        productDetail != 0 ? (
          <ItemDetail
            productDetail={productDetail}
            setCategorySelect={setCategorySelect}
            setProductDetail={setProductDetail}
          />
        ) : (
          <ItemListCategories
            categorySelect={categorySelect}
            setCategorySelect={setCategorySelect}
            setProductDetail={setProductDetail}
          />
        )
      ) : (
        <Home setCategorySelect={setCategorySelect} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({});
export default App;
