import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { FadeInDown, FadeOut } from "react-native-reanimated";

import type { StarshipProps } from "../../api/types";

import { useNavigation } from "@react-navigation/native";
import { Routes } from "@/navigation/Routes";

import { getImageSource } from "../utils/getImageSource";
import { withAnimated } from "../utils/withAnimated";

const AnimatedCard = withAnimated(Card);

interface StarshipItemProps {
  index: number;
  ship: StarshipProps;
}

interface StarshipDetailsScreenParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigate: any;
}

export function StarshipItem({ index, ship }: StarshipItemProps) {
  const { cost_in_credits: price, manufacturer, name: title } = ship;
  const imageSource = getImageSource(title);

  const navigation = useNavigation<StarshipDetailsScreenParams>();
  const handleGoToDetails = () => {
    navigation.navigate(Routes.DETAILS_SCREEN, {
      ...ship,
      image: imageSource,
    });
  };

  return (
    <AnimatedCard
      // mounting
      entering={FadeInDown.duration(index > 3 ? 0 : 250).delay(
        index > 3 ? 0 : 100 * index,
      )}
      //
      exiting={FadeOut.duration(250)}
      onPress={handleGoToDetails}
      style={styles.itemContainer}
    >
      <Card>
        <Card.Content>
          <View style={styles.rowContainer}>
            <Image
              source={imageSource}
              style={styles.image}
            />
            <Text variant="titleLarge">{title}</Text>
          </View>
        </Card.Content>
      </Card>
    </AnimatedCard>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 32,
    marginHorizontal: 24,
    width: `100%`,
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
    alignItems: "center",
  },
  image: {
    backgroundColor: "red",
    borderRadius: 15,
    height: 80,
    marginHorizontal: 10,
    width: 80,
  },
});
