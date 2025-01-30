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
 * Fetches data from the SWAPI API
 * @returns {Promis<Object>} A promise that resolves to the JSON response from SWAPI
 */
const fetchStarships = async (): Promise<Starship[]> => {
  try {
    const response = await fetch(`https://swapi.py4e.com/api/starships`);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error("Something bad happened with the api: " + error);
  }
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
