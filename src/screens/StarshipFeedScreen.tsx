import { StatusBar, StyleSheet, Text, View, FlatList } from "react-native";

import { default as data } from "../../api/data.json";
import { StarshipItem } from "@/components/StarshipItem";

const ships = new Map<string, string>();

data.results.forEach((item) => {
  ships.set(
    item.name,
    `../../assets/starships/${item.name
      .toString()
      .toLowerCase()
      .replaceAll(" ", "")}.jpg`
  );
});

export function StarshipFeedScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.results}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => {
          const imagePath = ships.get(item.name) || "../../assets/starships/default.jpg";
          return (
            <StarshipItem
              starship={item}
              imagePath={imagePath}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
  },
  headerContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
