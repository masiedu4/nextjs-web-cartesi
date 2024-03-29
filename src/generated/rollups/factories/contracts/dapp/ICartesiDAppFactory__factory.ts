/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ICartesiDAppFactory,
  ICartesiDAppFactoryInterface,
} from "../../../contracts/dapp/ICartesiDAppFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IConsensus",
        name: "consensus",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "dappOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "templateHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "contract CartesiDApp",
        name: "application",
        type: "address",
      },
    ],
    name: "ApplicationCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IConsensus",
        name: "_consensus",
        type: "address",
      },
      {
        internalType: "address",
        name: "_dappOwner",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_templateHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
    ],
    name: "calculateApplicationAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IConsensus",
        name: "_consensus",
        type: "address",
      },
      {
        internalType: "address",
        name: "_dappOwner",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_templateHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
    ],
    name: "newApplication",
    outputs: [
      {
        internalType: "contract CartesiDApp",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IConsensus",
        name: "_consensus",
        type: "address",
      },
      {
        internalType: "address",
        name: "_dappOwner",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_templateHash",
        type: "bytes32",
      },
    ],
    name: "newApplication",
    outputs: [
      {
        internalType: "contract CartesiDApp",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ICartesiDAppFactory__factory {
  static readonly abi = _abi;
  static createInterface(): ICartesiDAppFactoryInterface {
    return new utils.Interface(_abi) as ICartesiDAppFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICartesiDAppFactory {
    return new Contract(address, _abi, signerOrProvider) as ICartesiDAppFactory;
  }
}
