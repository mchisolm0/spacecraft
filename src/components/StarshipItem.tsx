import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Text, Card, Button } from "react-native-paper";
import { getImageSource } from "../utils/getImageSource";

interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
}

interface StarshipItemProps {
  starship: Starship;
  imagePath: string;
}
const StarshipItem: React.FC<{
  index: number;
  starship: Starship;
}> = ({ index, starship }) => {
  const { name: title } = starship;

  const imageSource = getImageSource(title);

export function StarshipItem({ starship, imagePath }: StarshipItemProps) {
  return (
    <Card>
      <Card.Content>
        <Text variant="titleLarge">{starship.name}</Text>
        <View style={styles.rowContainer}>
          <View>
            <Text variant="bodyMedium">{`Model: ${starship.model}`}</Text>
            <Text variant="bodyMedium">{`Cost in Credits: ${starship.cost_in_credits}`}</Text>
            <Text variant="bodyMedium">{`Crew: ${starship.crew}`}</Text>
            <Text variant="bodyMedium">{`Hyperdrive Rating: ${starship.hyperdrive_rating}`}</Text>
          </View>
          <View>
            <Image source={imageSource} style={styles.image} />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
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
    width: 80,
    height: 80,
    borderRadius: 15,
    marginHorizontal: 10,
  },
});

