import React from "react";
import { StatusBar, StyleSheet, Text, View, FlatList } from "react-native";

import { default as data } from "../../api/data.json";
import { StarshipItem } from "@/components/StarshipItem";
import { StarshipsList } from "@/components/StarshipList";

export function StarshipFeedScreen() {
  return (
    <View style={styles.container}>
      <StarshipsList />
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
