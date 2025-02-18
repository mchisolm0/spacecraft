import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { Offline } from "@/components/Offline";
import { StarshipsList } from "@/components/StarshipList";

export const StarshipFeedScreen = () => {
  return (
    <View style={styles.container}>
      <Offline />
      <StarshipsList />
    </View>
  );
};

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
