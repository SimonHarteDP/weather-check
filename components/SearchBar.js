import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const SearchBar = (props) => {
  const cities = props.data;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(propsToItems(cities));

  return (
    <View>
      <Text>Cities</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
  );
};
export default SearchBar;

const propsToItems = (list) => {
  list.forEach((city) => {
    city.label = city.city;
    city.value = city.city;
  });

  return list;
};
