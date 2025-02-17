import type { PropsWithChildren } from "react";

import NetInfo from "@react-native-community/netinfo";
import React, { createContext, useContext, useEffect, useState } from "react";

interface NetworkContextProps {
  isConnected: boolean | null;
}

const NetworkContext = createContext<NetworkContextProps>(
  {} as NetworkContextProps,
);

export const NetworkProvider = ({ children }: PropsWithChildren) => {
  const [isConnected, setIsConnected] = useState<boolean | null>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    NetInfo.fetch().then((state) => {
      setIsConnected(state.isConnected);
    });

    // use `NetInfo.addEventListener` to listen to network status changes
    // use `NetInfo.fetch` to get the current network status
    // store the network status in the `isConnected` state
    return () => {
      unsubscribe();
    };
  }, [isConnected]);

  return (
    <NetworkContext.Provider value={{ isConnected }}>
      {children}
    </NetworkContext.Provider >
  );
};

export const useNetwork = () => useContext(NetworkContext);

