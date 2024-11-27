import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

// You can import supported modules from npm
import { Card, Text, TextInput, Button, Checkbox } from "react-native-paper";
import Header from "../components/Header";

export default function LoginScreen() {
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const [isSecure, changeIsSecure] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heroSection}>
        <Header title={"Spacecraft"} />
      </View>
      <Card style={styles.loginSection}>
        <TextInput
          value={email}
          label={"Email"}
          onChangeText={changeEmail}
          style={styles.input}
        />
        <TextInput
          value={password}
          label={"Password"}
          onChangeText={changePassword}
          secureTextEntry={isSecure}
          style={styles.input}
        />
        <Checkbox.Item
          label="Show Password"
          status={isSecure ? "unchecked" : "checked"}
          onPress={() => changeIsSecure(!isSecure)}
          position="leading"
          style={styles.checkbox}
        />
        <Button style={styles.submitButton}>Press Me</Button>
        <Text style={styles.finePrint}>
          This is very important information.
        </Text>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  heroSection: {
    backgroundColor: "#CBC3E3",
    justifyContent: "center",
    flex: 3,
  },
  title: {
    margin: 24,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginSection: {
    flex: 7,
  },
  input: {
    margin: 10,
  },
  checkbox: {
    marginVertical: 4,
    marginHorizontal: 6,
    width: 200,
    backgroundColor: "#CBC3E3",
    borderRadius: 10,
  },
  submitButton: {
    padding: 10,
    margin: 10,
    marginHorizontal: 50,
    backgroundColor: "#CBC3E3",
  },
  finePrint: {
    fontSize: 8,
    textAlign: "center",
  },
});
