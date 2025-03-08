import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { FadeInDown, FadeOut } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

import type { StarshipProps } from "../../api/types";
import { getImageSource } from "../utils/getImageSource";
import { withAnimated } from "../utils/withAnimated";

import { Routes } from "@/navigation/Routes";

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
        <Card.Cover source={imageSource} />
        <Card.Content>
          <Card.Title
            subtitle={manufacturer}
            title={title}
          />
        </Card.Content>
      </Card>
    </AnimatedCard>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 15,
    height: 80,
    marginHorizontal: 10,
    width: 80,
  },
  itemContainer: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 16,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
