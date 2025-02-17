// App.tsx
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

import { LoginScreen } from "@/screens/LoginScreen";
import { TermsScreen } from "@/screens/TermsScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NetworkProvider } from '@/contexts/Network';

function App() {

  if (__DEV__) {
    require("./ReactotronConfig");
  }

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NetworkProvider>
          {/* <LoginScreen /> */}
          {/* <TermsScreen /> */}
          <StarshipFeedScreen />
        </NetworkProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
}

export default App;
