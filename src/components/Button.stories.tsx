import React from "react";
import { Alert, View } from "react-native";
import { Button } from "react-native-paper";

export default {
  title: "Button",
};

export const Default = () => (
  <View style={{ padding: 16, justifyContent: "space-between", flex: 1 }}>
    <Button
      mode="text"
      onPress={() => Alert.alert("Pressed!")}
    >
      Text
    </Button>
  </View>
);

Default.storyName = "Default";
