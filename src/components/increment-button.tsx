import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { IdlAccounts, Program,  } from "@coral-xyz/anchor";
import { Keypair } from "@solana/web3.js";
import * as anchor from '@coral-xyz/anchor';
import SUPERADMIN_WALLLET from '../anchor/spin/superadmin.json';
 

//import { program } from "../anchor/setup";

import { program } from "../anchor/spin/setup";


export default function IncrementButton() {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [isLoading, setIsLoading] = useState(false);

  //const counter = anchor.web3.Keypair.generate();
  const superadmin = anchor.web3.Keypair.fromSecretKey(Buffer.from(SUPERADMIN_WALLLET));

  const keypair = Keypair.generate();
  //Keypair.fromSecretKey(publicKey)



  const onClick = async () => {
    if (!publicKey) return;

    setIsLoading(true);

    const accounts = await program.account.adminAcc.programId;

    console.log(accounts)


    try {
      // Create a transaction to invoke the increment function 
      const transaction = await program.methods
        .clearAdmin().accounts({superAdmin: superadmin.publicKey, adminPda: superadmin.publicKey,
               systemProgram: superadmin.publicKey})
        .signers([superadmin])
        .transaction();

// const transaction =  await program.methods.clearAdmin()
  
//   .accounts({superAdmin: superadmin.publicKey, adminPda: superadmin.publicKey,
//     systemProgram: superadmin.publicKey
//   })
//   .signers([superadmin])
//   .rpc();


        const accounts = await program.account.adminAcc;

        console.log(accounts)

       // const txId = await web3.sendAndConfirmTransaction(pg.connection, tx, [pg.wallet.keypair, counter]);

      const transactionSignature = await sendTransaction(
        transaction,
         connection
       );

       console.log(`View on explorer: https://solana.fm/tx/${transactionSignature}?cluster=devnet-alpha`);

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        className="w-24"
        onClick={onClick}
        disabled={!publicKey}
      >
        {isLoading ? "Loading" : "Increment"}
      </button>
    </>
  );
}
