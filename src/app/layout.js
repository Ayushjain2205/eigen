"use client";
import "../styles/globals.css";
import { DM_Sans } from "next/font/google";
import { WagmiProvider } from "@/Components/WagmiProvider";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { AuroraTestnet } from "@thirdweb-dev/chains";

const inter = DM_Sans({ weight: ["500", "400", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <title>Eigen</title>
      <ThirdwebProvider activeChain={AuroraTestnet}>
        <WagmiProvider>
          <body className={inter.className}>{children}</body>
        </WagmiProvider>
      </ThirdwebProvider>
    </html>
  );
}
