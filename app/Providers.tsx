'use client'

// Import React and necessary components from the @web3-onboard library
import React from "react";
import { Web3OnboardProvider } from "@web3-onboard/react";
import { init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import configFile from "./config.json";


const config: any = configFile

// Initialize the injected wallet module
const injected = injectedModule();

// Initialize the Web3Onboard instance with configuration settings
const web3Onboard = init({
	wallets: [injected],
	chains: Object.entries(config).map(([k, v]: [string, any], i) => ({id: k, token: v.token, label: v.label, rpcUrl: v.rpcUrl})),
	appMetadata: {
	    name: "Cartesi Rollups Test DApp",
	    icon: "<svg><svg/>",
	    description: "Demo app for Cartesi Rollups",
	    recommendedInjectedWallets: [
		{ name: "MetaMask", url: "https://metamask.io" },
	    ],
	},
    });

  

// Define a React component named Providers
export const Providers = ({ children }:any) => {
  return (
    // Wrap the application with the Web3OnboardProvider, providing access to the Web3Onboard instance
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      {children}
    </Web3OnboardProvider>
  );
};
