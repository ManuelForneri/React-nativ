import { View, TextInput } from "react-native";

const TopBarDebt = () => {
  return (
    <View>
      <TextInput placeholder="Monto" />
      <TextInput placeholder="A quien se debe?" />
      <TextInput placeholder="Descripcion de la deuda" />
    </View>
  );
};
export default TopBarDebt;
