import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Card, Checkbox, Text, TextInput } from "react-native-paper";
import { Button } from "@react-navigation/elements";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Header } from "../components/Header";

import { Routes } from "@/navigation/Routes";

export function LoginScreen() {
  const navigation = useNavigation();

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
        <Button
          onPress={() => navigation.navigate(Routes.STARSHIPS_SCREEN)}
          style={styles.submitButton}
        >
          Press Me
        </Button>
        <Button
          onPress={() => navigation.navigate(Routes.TERMS_SCREEN)}
          style={styles.submitButton}
        >
          <Text style={styles.finePrint}>
            This is very important information.
          </Text>
        </Button>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    backgroundColor: "#CBC3E3",
    borderRadius: 10,
    marginHorizontal: 6,
    marginVertical: 4,
    width: 200,
  },
  container: {
    backgroundColor: "#ecf0f1",
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  finePrint: {
    fontSize: 8,
    textAlign: "center",
  },
  heroSection: {
    backgroundColor: "#CBC3E3",
    flex: 3,
    justifyContent: "center",
  },
  input: {
    margin: 10,
  },
  loginSection: {
    flex: 7,
  },
  submitButton: {
    backgroundColor: "#CBC3E3",
    margin: 10,
    marginHorizontal: 50,
    padding: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    margin: 24,
    textAlign: "center",
  },
});
