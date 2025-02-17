import { useNetwork } from "@/contexts/Network";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export const Offline = () => {
  // Add `useIsConnected()` hook
  const { isConnected } = useNetwork();

  if (isConnected === true) return null;

  return (
    <View>
      <Text style={styles.message}>
        Offline...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FEE2E2",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    padding: 20,
    position: "absolute",
    top: 55,
    width: "90%",
  },
  message: {
    color: "#991B1B",
  },
});

