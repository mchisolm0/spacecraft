import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

import type { StarshipProps } from "../../api/types";

import { useNavigation } from "@react-navigation/native";
import { Routes } from "@/navigation/Routes";

import { getImageSource } from "../utils/getImageSource";

interface StarshipItemProps {
  index: number;
  ship: StarshipProps;
}
export function StarshipItem({ index, ship }: StarshipItemProps) {
  const { cost_in_credits: price, manufacturer, name: title } = ship;
  const imageSource = getImageSource(title);
  const navigation = useNavigation();

  return (
    <Button
      onPress={() =>
        navigation.navigate(Routes.DETAILS_SCREEN, {
          ...ship,
          image: imageSource,
        })
      }
      style={styles.itemContainer}
    >
      <Card>
        <Card.Content>
          <View style={styles.rowContainer}>
            <Image
              source={imageSource}
              style={styles.image}
            />
            <Text variant="titleLarge">{title}</Text>
          </View>
        </Card.Content>
      </Card>
    </Button>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  // TODO: Ask re: rowContainer style and
  // making sure the text avoids overlapping.
  // Should the text be multiline?
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    backgroundColor: "red",
    borderRadius: 15,
    height: 80,
    marginHorizontal: 10,
    width: 80,
  },
});
