import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <View style={styles.container}>
      <SearchBar data={OPTIONS}></SearchBar>
      <StatusBar style="auto" />
    </View>
  );
}

// Search
//   Dropdown (uses options)

// Result
//   Info

//   Image

const OPTIONS = [
  { city: "Belfast", temperature: "18", weather: "sunny" },
  { city: "New York", temperature: "25", weather: "cloudy" },
  { city: "London", temperature: "10", weather: "rainy" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
