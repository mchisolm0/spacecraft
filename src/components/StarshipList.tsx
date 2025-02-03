import { useQuery } from "@tanstack/react-query";
import { FlatList, Text } from "react-native";
import { StarshipItem } from "./StarshipItem";
import { useStarships } from "@/hooks/useStarships";

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
  const { isLoading, isError, data, refetch } = useStarships();

  if (isLoading) {
    return <Text>Loading</Text>;
  }
  if (isError) {
    return <Text>Something bad happened...</Text>
  }

  return (
    <FlatList
      data={data}
      onRefresh={refetch}
      refreshing={isLoading}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => {
        return (
          <StarshipItem
            index={item.name}
            starship={item}
          />
        );
      }}
    />
  )
}
