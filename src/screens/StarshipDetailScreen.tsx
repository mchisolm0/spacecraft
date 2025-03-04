import * as React from "react";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import type { StarshipProps } from "../../api/types";

interface StarshipDetailsScreenProps {
  route: {
    params: StarshipProps;
  };
}

export function StarshipDetailScreen({ route }: StarshipDetailsScreenProps) {
  const navigation = useNavigation();

  const { name, model } = route.params;

  return (
    <List.Section>
      <List.Subheader>Some Title</List.Subheader>
      <List.Item
        title={name}
        left={() => <List.Icon icon="folder" />}
      />
      <List.Item
        title="Second Item"
        left={() => <List.Icon icon="calendar" />}
      />
    </List.Section>
  );
}
