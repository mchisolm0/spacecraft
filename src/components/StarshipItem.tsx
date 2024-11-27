import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

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

const StarshipItem: React.FC<{ starship: Starship }> = ({ starship }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text style={styles.title}>{starship.name}</Text>
          <Text>{`Model: ${starship.model}`}</Text>
          <Text>{`Cost in Credits: ${starship.cost_in_credits}`}</Text>
          <Text>{`Crew: ${starship.crew}`}</Text>
          <Text>{`Hyperdrive Rating: ${starship.hyperdrive_rating}`}</Text>
        </View>
        <Image
          style={styles.image}
          source={{
            uri: `https://picsum.photos/seed/${
              `starwars ship` + starship.model
            }/400/200`,
          }}
        />
      </View>
    </View>
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
  image: {
    width: 40,
    height: 40,
    borderRadius: 15,
    marginHorizontal: 10,
  },
});

export default StarshipItem;
