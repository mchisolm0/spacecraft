import type { ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { Offline } from "./Offline";

interface ScreenContainerProps {
  children?: ReactNode;
  title: string;
  withSeparatorFooter?: boolean;
}

export function ScreenContainer({
  children,
  title,
  withSeparatorFooter = false,
}: ScreenContainerProps) {
  return (
    <View style={styles.container}>
      <Offline />
      <Text
        style={styles.headerText}
        variant="headlineMedium"
      >
        {title}
      </Text>

      {children}
      {withSeparatorFooter && <View style={styles.footer} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  footer: {
    paddingBottom: 256,
  },
  headerText: {
    fontWeight: "bold",
    marginBottom: 20,
  },
});
