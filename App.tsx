// App.tsx
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

import { LoginScreen } from "@/screens/LoginScreen";
import { TermsScreen } from "@/screens/TermsScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";

function App() {

  if (__DEV__) {
    require("./ReactotronConfig");
  }

  return (
    <PaperProvider>
      {/* <LoginScreen /> */}
      {/* <TermsScreen /> */}
      <StarshipFeedScreen />
    </PaperProvider>
  );
}

export default App;
