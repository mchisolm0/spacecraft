import { createStaticNavigation, useRoute } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Routes } from "./Routes";

import { LoginScreen } from "@/screens/LoginScreen";
import { StarshipDetailScreen } from "@/screens/StarshipDetailScreen";
import { StarshipFeedScreen } from "@/screens/StarshipFeedScreen";
import { TermsScreen } from "@/screens/TermsScreen";
import { StarshipProps } from "api/types";

export interface RootStackParamList {
  Login: undefined;
  Terms: undefined;
  Starships: undefined;
  Details: StarshipProps;
  [key: string]: any;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

export const Navigator = () => {
  return (
    <RootStack.Navigator initialRouteName="Login">
      <RootStack.Screen
        name="Login"
        component={LoginScreen}
      />
      <RootStack.Screen
        name="Terms"
        component={TermsScreen}
      />
      <RootStack.Screen
        name="Starships"
        component={StarshipFeedScreen}
      />
      <RootStack.Screen
        name="Details"
        component={StarshipDetailScreen}
        options={{
          presentation: "modal",
        }}
      />
    </RootStack.Navigator>
  );
};
