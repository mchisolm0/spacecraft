import React from "react";
import { ScrollView } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

export default {
  title: "Card",
};

const LeftContent = () => (
  <Avatar.Icon
    style={{ height: 50, width: 50 }}
    icon="folder"
  />
);

export const Default = () => {
  const cardStyle = { margin: 8 };
  const contentStyle = { padding: 8 };

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 16,
        justifyContent: "space-between",
      }}
    >
      <Card
        style={cardStyle}
        mode="elevated"
      >
        <Card.Title
          title="Elevated Card"
          subtitle="Card Subtitle"
          left={LeftContent}
          style={contentStyle}
        />
        <Card.Cover
          style={contentStyle}
          source={{ uri: "https://picsum.photos/700" }}
        />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
      <Card
        style={cardStyle}
        mode="outlined"
      >
        <Card.Title
          title="Outlined Card"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Cover
          style={contentStyle}
          source={{ uri: "https://picsum.photos/700" }}
        />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
      <Card
        style={cardStyle}
        mode="contained"
      >
        <Card.Title
          title="Contained Card"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Cover
          style={contentStyle}
          source={{ uri: "https://picsum.photos/700" }}
        />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

Default.storyName = "Default";
