// App.tsx
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";

import { NetworkProvider } from "@/contexts/Network";
import { LoginScreen } from "@/screens/LoginScreen";
import { TermsScreen } from "@/screens/TermsScreen";

function App() {
  if (__DEV__) {
    require("./ReactotronConfig");
  }

  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NetworkProvider>
          <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
              {/* <LoginScreen /> */}
              {/* <TermsScreen /> */}
              <StarshipFeedScreen />
            </SafeAreaView>
          </SafeAreaProvider>
        </NetworkProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
}

// export default App;
export { default } from "./.storybook";
