// App.tsx
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

import LoginScreen from "./src/screens/LoginScreen";
import { TermsScreen } from "./src/screens/TermsScreen";
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

// eslint-disable-next-line import/no-default-export
export default App;
