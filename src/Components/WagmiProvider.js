"use client";
import React from "react";

import {
  WagmiConfig,
  createConfig,
  configureChains,
  mainnet,
  polygonMumbai,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [
    alchemyProvider({ apiKey: "1Rg9OyNM1O-9F-7FLdy8mVhJ1quLpR-L" }),
    publicProvider(),
  ]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

export const WagmiProvider = ({ children }) => {
  return (
    <WagmiConfig config={config}>
      <>{children}</>
    </WagmiConfig>
  );
};
