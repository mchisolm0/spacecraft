import { FlatList, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { StarshipItem } from "./StarshipItem";

import { useStarships } from "@/hooks/useStarships";

/**
 * Renders a FlatList of starships using data from the SWAPI API
 */
export function StarshipsList() {
  const { isLoading, isError, data, refetch } = useStarships();

  if (isLoading) {
    return <Text>Loading</Text>;
  }
  if (isError) {
    return <Text>Something bad happened...</Text>;
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
            name={item.name}
            model={item.model}
            cost_in_credits={item.cost_in_credits}
            crew={item.crew}
            hyperdrive_rating={item.hyperdrive_rating}
          />
        );
      }}
    />
  );
}
