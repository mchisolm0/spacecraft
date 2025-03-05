import * as React from "react";
import { View, Image, StyleSheet } from "react-native";
import { List, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import type { StarshipProps } from "../../api/types";

interface StarshipDetailsScreenProps {
  route: {
    params: StarshipProps;
  };
}

export function StarshipDetailScreen({ route }: StarshipDetailsScreenProps) {
  const navigation = useNavigation();

  const {
    cost_in_credits: price,
    manufacturer,
    passengers,
    hyperdrive_rating: speed,
    name,
    model,
    image,
  } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.imageStyle}
      />
      <List.Section>
        <Text variant="displayLarge">{name}</Text>
        <List.Subheader>{model}</List.Subheader>
        <List.Item
          title={price}
          left={() => <List.Icon icon="hand-coin-outline" />}
        />
        <List.Item
          title={manufacturer}
          left={() => <List.Icon icon="hammer-wrench" />}
        />
        <List.Item
          title={speed}
          left={() => <List.Icon icon="speedometer" />}
        />
        <List.Item
          title={passengers}
          left={() => <List.Icon icon="account-group" />}
        />
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  imageStyle: {
    borderRadius: 15,
    width: `100%`,
  },
});
