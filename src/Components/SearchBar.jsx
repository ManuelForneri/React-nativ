import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

const SearchBar = ({ setKeyword }) => {
  const regex = /^[^0-9]*$/;
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");

  const seach = () => {
    if (regex.test(inputText)) {
      setKeyword(inputText);
      setError("");
    } else {
      setError("no debe contener numeros la busqueda");
    }
  };

  const onDeletedSearch = () => {
    setInputText("");
    setKeyword("");
    setError("");
  };

  return (
    <View>
      <View style={styles.containerSearch}>
        <TextInput
          placeholder="Buscar producto"
          placeholderTextColor="#fff"
          style={styles.input}
          value={inputText}
          onChangeText={(t) => setInputText(t)}
        />
        <Pressable>
          <Entypo
            name="circle-with-cross"
            size={24}
            color="black"
            onPress={() => onDeletedSearch()}
          />
        </Pressable>
        <Pressable onPress={seach}>
          <AntDesign name="search1" size={24} color="black" />
        </Pressable>
      </View>
      {error ? <Text style={styles.errorMsj}>{error}</Text> : null}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  containerSearch: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    backgroundColor: "#36508A",
    width: "80%",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
  },
  errorMsj: {
    color: "red",
    textAlign: "center",
    width: "100%",
    padding: 10,
  },
});
