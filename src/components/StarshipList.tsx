import { FlatList, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { StarshipItem } from "./StarshipItem";

import { useStarships } from "@/hooks/useStarships";

interface ShipProps {
  cost_in_credits: string;
  manufacturer: string;
  model: string;
  name: string;
}

interface RenderItemProps {
  index: number;
  item: ShipProps;
}

const renderItem = (props: RenderItemProps) => {
  const ship = props.item;

  return (
    <StarshipItem
      index={props.index}
      ship={ship}
    />
  );
};
/**
 * Renders a FlatList of starships using data from the SWAPI API
 */
export function StarshipsList() {
  const { isLoading, isError, data, refetch } = useStarships();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>Something bad happened...</Text>;
  }

  return (
    <FlatList
      data={data}
      onRefresh={refetch}
      refreshing={isLoading}
      keyExtractor={(ship) => ship.model}
      renderItem={renderItem}
    />
  );
}
