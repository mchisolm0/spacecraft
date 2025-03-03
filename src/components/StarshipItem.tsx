import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { Routes } from "@/navigation/Routes";

import { getImageSource } from "../utils/getImageSource";

interface StarshipItemProps {
  name: string;
  model: string;
  cost_in_credits: string;
  crew: string;
  hyperdrive_rating: string;
}
export function StarshipItem({
  name,
  model,
  cost_in_credits,
  crew,
  hyperdrive_rating,
}: StarshipItemProps) {
  const imageSource = getImageSource(name);
  const navigation = useNavigation();

  return (
    <Button
      onPress={() => navigation.navigate(Routes.DETAILS_SCREEN)}
      style={styles.itemContainer}
    >
      <Card>
        <Card.Content>
          <View style={styles.rowContainer}>
            <Image
              source={imageSource}
              style={styles.image}
            />
            <View>
              <Text variant="titleLarge">{name}</Text>
              <Text variant="bodyMedium">{`Cost in Credits: ${cost_in_credits}`}</Text>
              <Text variant="bodyMedium">{`Hyperdrive Rating: ${hyperdrive_rating}`}</Text>
              <Text variant="bodyMedium">{`Crew: ${crew}`}</Text>
            </View>
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
