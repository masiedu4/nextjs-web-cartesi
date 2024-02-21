'use client'

import { useState } from "react";
import { GraphQLProvider } from "./GraphQL"
import { Notices } from "./Notices";
import { Input } from "./Input";
import { Inspect } from "./Inspect";
import { Network } from "./Network";
import { Vouchers } from "./Vouchers";
import { Reports } from "./Reports";


export default function Home() {

  const [dappAddress, setDappAddress] = useState("0x70ac08179605AF2D9e75782b8DEcDD3c22aA4D0C");

  return (
   <>
   <Network />
            <GraphQLProvider>
                <div>
                    Dapp Address: <input
                        type="text"
                        value={dappAddress}
                        onChange={(e) => setDappAddress(e.target.value)}
                    />
                    <br /><br />
                </div>
                <h2>Inspect</h2>
                <Inspect />
                <h2>Input</h2>
                <Input dappAddress={dappAddress} />
                <h2>Reports</h2>
                <Reports />
                <h2>Notices</h2>
                <Notices />
                <h2>Vouchers</h2>
                <Vouchers dappAddress={dappAddress} />
            </GraphQLProvider>
   
   </>
  );
}
