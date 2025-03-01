import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { Button } from "@react-navigation/elements";

import { Offline } from "@/components/Offline";
import { ScreenContainer } from "@/components/ScreenContainer";
import { StarshipsList } from "@/components/StarshipList";

export const StarshipFeedScreen = () => {
  const navigation = useNavigation();

  return (
    <ScreenContainer title="Starship Screen">
      <Button onPress={() => navigation.goBack()}>Login Screen</Button>
      <StarshipsList />
    </ScreenContainer>
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
