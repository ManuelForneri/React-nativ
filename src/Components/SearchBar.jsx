import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

const SearchBar = ({ setKeyword }) => {
  const [inputText, setInputText] = useState("");
  const onDeletedSearch = () => {
    setInputText("");
    setKeyword("");
  };

  return (
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
      <Pressable
        onPress={() => {
          setKeyword(inputText);
        }}
      >
        <AntDesign name="search1" size={24} color="black" />
      </Pressable>
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
});
