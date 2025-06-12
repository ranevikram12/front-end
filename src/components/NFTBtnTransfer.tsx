import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { IdlAccounts, Program,  } from "@coral-xyz/anchor";
import { Keypair, PublicKey } from "@solana/web3.js";
import * as anchor from '@coral-xyz/anchor';
import SUPERADMIN_WALLLET from '../anchor/spin/superadmin.json';
//import logo from "../asset/logo.png"
import logo from "../asset/logo.png"
import { Metaplex  } from "@metaplex-foundation/js-next";
import { Connection, clusterApiUrl } from "@solana/web3.js";

 

//import { program } from "../anchor/setup";

import { program } from "../anchor/spin/setupTransfer";

//import { createProgrammableNft, mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import {
  createGenericFile,
  generateSigner,
  percentAmount,
  signerIdentity,
  sol,
} from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys";
import { base58 } from "@metaplex-foundation/umi/serializers";
//import fs from "fs";
import path from "path";

import * as fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

//import { readFile, writeFile } from 'fs.promises';


export default function NFTBtnTransfer() {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [isLoading, setIsLoading] = useState(false);

  const superadmin = anchor.web3.Keypair.fromSecretKey(Buffer.from(SUPERADMIN_WALLLET));

  const keypair = Keypair.generate();
  const onClick = async () => {
    if (!publicKey) return;

    setIsLoading(true);
    console.log(publicKey)


    try {


      console.log(publicKey)

      console.log(superadmin.publicKey)

 
    const data = new anchor.BN(1 * anchor.web3.LAMPORTS_PER_SOL);

    console.log(data)


      // const transaction = await program.methods
      //   .transferLamports(data).accounts({from: publicKey, to: superadmin.publicKey})
      //   .transaction();
      // const transactionSignature = await sendTransaction(
      //   transaction,
      //    connection
      //  );


       const mint: anchor.web3.PublicKey = new anchor.web3.PublicKey(
        "BQH7TvfikWH2bPupp6BnGryYWPr3e8oAWDmDufJ2aK1L"
      );

      const ownerTokenAddress = await anchor.utils.token.associatedAddress({
        mint: mint,
        owner: superadmin.publicKey
      });
      const buyerTokenAddress = await anchor.utils.token.associatedAddress({
        mint: mint,
        owner: publicKey,
      });


      console.log("buyer ",buyerTokenAddress)


       const transaction2 = await program.methods
       .sell(data)
       .accounts({
        mint: mint,
        ownerTokenAccount: ownerTokenAddress,
        ownerAuthority: publicKey,
        buyerTokenAccount: buyerTokenAddress,
        buyerAuthority: publicKey,
      
      })
       .transaction();

       const transactionSignature2 = await sendTransaction(
        transaction2,
         connection
       );


       console.log(`View on explorer: https://solana.fm/tx/${transactionSignature2}?cluster=devnet-alpha`);

      //  const newAccountBalance = await program.provider.connection.getBalance(
      //   publicKey
      // );

      // const newAccountBalance1 = await program.provider.connection.getBalance(
      //   superadmin.publicKey
      // );

      // console.log(newAccountBalance, newAccountBalance1)

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
        {isLoading ? "Loading" : "NFT"}
      </button>
    </>
  );
}
