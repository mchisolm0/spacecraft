import { createStaticNavigation, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "./Routes";

import { LoginScreen } from "@/screens/LoginScreen";
import { StarshipFeedScreen } from "@/screens/StarshipFeedScreen";
import { TermsScreen } from "@/screens/TermsScreen";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Login",
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Login: LoginScreen,
    Terms: TermsScreen,
    Starships: StarshipFeedScreen,
  },
});

export const Navigator = createStaticNavigation(RootStack);
