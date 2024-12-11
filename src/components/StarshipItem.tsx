import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Text, Card, Button } from "react-native-paper";

import { ImageSourcePropType } from "react-native";

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

const StarshipItem: React.FC<{
  starship: Starship;
  filePath: string;
}> = ({ starship, filePath }) => {
  return (
    <Card>
      <Card.Content>
        <Text variant="titleLarge">{starship.name}</Text>
        <View style={styles.rowContainer}>
          <View>
            <Text variant="bodyMedium">{`Model: ${starship.model}`}</Text>
            <Text variant="bodyMedium">{`Cost in Credits: ${starship.cost_in_credits}`}</Text>
          </View>
          <View>
            <Text variant="bodyMedium">{`Crew: ${starship.crew}`}</Text>
            <Text variant="bodyMedium">{`Hyperdrive Rating: ${starship.hyperdrive_rating}`}</Text>
          </View>
        </View>
      </Card.Content>
      {/* TODO: Finish setting up starship images */}
      {filePath ? (
        <Image source={require(filePath)} style={styles.image} />
      ) : (
        <Image
          source={require("../../assets/starships/default.jpg")} // Fallback image
          style={styles.image}
        />
      )}
    </Card>
  );
};

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
    width: 40,
    height: 40,
    borderRadius: 15,
    marginHorizontal: 10,
  },
});

export default StarshipItem;
