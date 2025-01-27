// App.tsx
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

import { LoginScreen } from "@/screens/LoginScreen";
import { TermsScreen } from "@/screens/TermsScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";

function App() {
  return (
    <PaperProvider>
      {/* <LoginScreen /> */}
      {/* <TermsScreen /> */}
      <StarshipFeedScreen />
    </PaperProvider>
  );
}

export default App;
