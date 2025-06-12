import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { IdlAccounts, Program, } from "@coral-xyz/anchor";
import { Keypair, PublicKey } from "@solana/web3.js";
import * as anchor from '@coral-xyz/anchor';
import SUPERADMIN_WALLLET from '../anchor/spin/superadmin.json';
import { program } from "../anchor/spin/setupTransfer";
import { Metaplex, keypairIdentity } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import {  useEffect } from "react";




export default function TransgerBtn() {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [isLoading, setIsLoading] = useState(false);
  const superadmin = anchor.web3.Keypair.fromSecretKey(Buffer.from(SUPERADMIN_WALLLET));

  const keypair = Keypair.generate();
  const [count, setCount] = useState("");


  useEffect(() => {
    //Runs only on the first render
   getImg()
  }, []);


  const getImg = async () => {
    const connection = new Connection(clusterApiUrl("devnet"));
    const metaplex = new Metaplex(connection);
    const mint = new PublicKey("ATe3DymKZadrUoqAMn7HSpraxE4gB88uo1L9zLGmzJeL");
    //const nft = await metaplex.nfts().findByMint(mint);
    //const nft = await metaplex.nfts().findByMint({ mint });
    
    const mintAddress = new PublicKey("BQH7TvfikWH2bPupp6BnGryYWPr3e8oAWDmDufJ2aK1L");
    
    const nft1 = await metaplex.nfts().findByMint({ mintAddress });//
    
    const imageUrl = nft1!.json!;
    setCount(nft1.uri)
    
    console.log("img url",nft1.uri)

  }
  const onClick = async () => {
    if (!publicKey) return;

    setIsLoading(true);
    try {


//       const connection = new Connection(clusterApiUrl("devnet"));
// const metaplex = new Metaplex(connection);
// const mint = new PublicKey("ATe3DymKZadrUoqAMn7HSpraxE4gB88uo1L9zLGmzJeL");
// //const nft = await metaplex.nfts().findByMint(mint);
// //const nft = await metaplex.nfts().findByMint({ mint });

// const mintAddress = new PublicKey("BQH7TvfikWH2bPupp6BnGryYWPr3e8oAWDmDufJ2aK1L");

// const nft1 = await metaplex.nfts().findByMint({ mintAddress });//

// const imageUrl = nft1!.json!;

// console.log("img url",nft1.uri)


      console.log(publicKey)
      console.log(superadmin.publicKey)
      const data = new anchor.BN(2 * anchor.web3.LAMPORTS_PER_SOL);

      console.log(data)
      const transaction = await program.methods
        .transferLamports(data).accounts({ from: publicKey, to: superadmin.publicKey })
        .transaction();

      const transactionSignature = await sendTransaction(
        transaction,
        connection
      );

      console.log(`View on explorer: https://solana.fm/tx/${transactionSignature}?cluster=devnet-alpha`);

      const newAccountBalance = await program.provider.connection.getBalance(
        publicKey
      );

      const newAccountBalance1 = await program.provider.connection.getBalance(
        superadmin.publicKey
      );

      console.log(newAccountBalance, newAccountBalance1)

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
        {isLoading ? "Loading" : "Transfer"}
      </button>
      <img 
      src={count}
      alt="new"
      />
    </>
  );
}
