import { useQuery } from "@tanstack/react-query";
import { FlatList, Text } from "react-native";
import { StarshipItem } from "./StarshipItem";

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

/**
 * Renders a FlatList of starships using data from the SWAPI API
 */
export function StarshipsList() {
  const { isLoading, isError, data } = useQuery<Starship[], Error>(['starships'], fetchStarships);

  if (isLoading) {
    return <Text>Loading</Text>;
  }
  if (isError) {
    return <Text>Something bad happened...</Text>
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => {
        return (
          <StarshipItem
            index={item.url}
            starship={item}
          />
        );
      }}
    />
  )
}
