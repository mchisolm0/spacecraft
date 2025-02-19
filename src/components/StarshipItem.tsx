import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

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

  return (
    <Card>
      <Card.Content>
        <Text variant="titleLarge">{name}</Text>
        <View style={styles.rowContainer}>
          <View>
            <Text variant="bodyMedium">{`Model: ${model}`}</Text>
            <Text variant="bodyMedium">{`Cost in Credits: ${cost_in_credits}`}</Text>
            <Text variant="bodyMedium">{`Crew: ${crew}`}</Text>
            <Text variant="bodyMedium">{`Hyperdrive Rating: ${hyperdrive_rating}`}</Text>
          </View>
          <View>
            <Image
              source={imageSource}
              style={styles.image}
            />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    padding: 10,
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
    justifyContent: "space-around",
  },
  image: {
    backgroundColor: "red",
    borderRadius: 15,
    height: 80,
    marginHorizontal: 10,
    width: 80,
  },
});
