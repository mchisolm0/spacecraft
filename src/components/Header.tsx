import { StyleSheet, Text } from "react-native";

// Setup props
interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ecf0f1",
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    margin: 24,
    textAlign: "center",
  },
});
