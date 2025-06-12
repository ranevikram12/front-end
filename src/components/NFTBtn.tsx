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


export default function NFTBtn() {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [isLoading, setIsLoading] = useState(false);

  const superadmin = anchor.web3.Keypair.fromSecretKey(Buffer.from(SUPERADMIN_WALLLET));

  const keypair = Keypair.generate();
  const onClick = async () => {
    if (!publicKey) return;

    setIsLoading(true);

    try {


      console.log(publicKey)

      console.log(superadmin.publicKey)

 
    const data = new anchor.BN(2 * anchor.web3.LAMPORTS_PER_SOL);

    console.log(data)


      const transaction = await program.methods
        .transferLamports(data).accounts({from: publicKey, to: superadmin.publicKey})
        .transaction();
      const transactionSignature = await sendTransaction(
        transaction,
         connection
       );


       const mint: anchor.web3.PublicKey = new anchor.web3.PublicKey(
        "59UQbpn69GKiTZajEy6y732AFYB3HGY7q1ymdj2qomS2"
      );

      const ownerTokenAddress = await anchor.utils.token.associatedAddress({
        mint: mint,
        owner: superadmin.publicKey
      });
      const buyerTokenAddress = await anchor.utils.token.associatedAddress({
        mint: mint,
        owner: publicKey,
      });

       const transaction2 = await program.methods
       .sell(data)
       .accounts({
        mint: mint,
        ownerTokenAccount: ownerTokenAddress,
        ownerAuthority: superadmin.publicKey,
        buyerTokenAccount: buyerTokenAddress,
        buyerAuthority: publicKey,
      
      })
       .transaction();

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




const createNft = async () => {
  //
  // ** Setting Up Umi **
  //


//   const umi = createUmi('https://api.devnet.solana.com')
//     .use(mplTokenMetadata())
//   .use(
//     irysUploader({
//       // mainnet address: "https://node1.irys.xyz"
//       // devnet address: "https://devnet.irys.xyz"
//       address: "https://devnet.irys.xyz",
//     })
//   );

//   const signer = generateSigner(umi);

//   umi.use(signerIdentity(signer));

//   // Airdrop 1 SOL to the identity
//   // if you end up with a 429 too many requests error, you may have to use
//   // the filesystem wallet method or change rpcs.
//   console.log("Airdropping 1 SOL to identity");
//   await umi.rpc.airdrop(umi.identity.publicKey, sol(1));

//   //
//   // ** Upload an image to Arweave **
//   //

//   // use `fs` to read file via a string path.
//   // You will need to understand the concept of pathing from a computing perspective.


//  let imageFile =  logo
//  //let imageFile = null
//   // Use `createGenericFile` to transform the file into a `GenericFile` type
//   // that umi can understand. Make sure you set the mimi tag type correctly
//   // otherwise Arweave will not know how to display your image.

//   const umiImageFile = createGenericFile(imageFile, "0.png", {
//     tags: [{ name: "Content-Type", value: "image/png" }],
//   });

//   // Here we upload the image to Arweave via Irys and we get returned a uri
//   // address where the file is located. You can log this out but as the
//   // uploader can takes an array of files it also returns an array of uris.
//   // To get the uri we want we can call index [0] in the array.

//   console.log("Uploading image...");
//   const imageUri = await umi.uploader.upload([umiImageFile]).catch((err) => {
//     throw new Error(err);
//   });

//   //
//   // ** Upload Metadata to Arweave **
//   //

//   const metadata = {
//     name: "My Nft",
//     description: "This is an Nft on Solana",
//     image: imageUri[0],
//     external_url: "https://example.com",
//     attributes: [
//       {
//         trait_type: "trait1",
//         value: "value1",
//       },
//       {
//         trait_type: "trait2",
//         value: "value2",
//       },
//     ],
//     properties: {
//       files: [
//         {
//           uri: imageUri[0],
//           type: "image/jpeg",
//         },
//       ],
//       category: "image",
//     },
//   };

//   // Call upon umi's uploadJson function to upload our metadata to Arweave via Irys.
//   console.log("Uploading metadata...");
//   const metadataUri = await umi.uploader.uploadJson(metadata).catch((err) => {
//     throw new Error(err);
//   });

//   //
//   // ** Creating the Nft **
//   //

//   // We generate a signer for the Nft
//   const nftSigner = generateSigner(umi);

//   // Decide on a ruleset for the Nft.
//   // Metaplex ruleset - publicKey("eBJLFYPxJmMGKuFwpDWkzxZeUrad92kZRC5BJLpzyT9")
//   // Compatability ruleset - publicKey("AdH2Utn6Fus15ZhtenW4hZBQnvtLgM1YCW2MfVp7pYS5")
//   const ruleset = null // or set a publicKey from above

//   console.log("Creating Nft...");
//   const tx = await createProgrammableNft(umi, {
//     mint: nftSigner,
//     sellerFeeBasisPoints: percentAmount(5.5),
//     name: metadata.name,
//     uri: metadataUri,
//     ruleSet: ruleset,
//   }).sendAndConfirm(umi);

//   // Finally we can deserialize the signature that we can check on chain.
//   const signature = base58.deserialize(tx.signature)[0];

//   // Log out the signature and the links to the transaction and the NFT.
//   console.log("\npNFT Created")
//   console.log("View Transaction on Solana Explorer");
//   console.log(`https://explorer.solana.com/tx/${signature}?cluster=devnet`);
//   console.log("\n");
//   console.log("View NFT on Metaplex Explorer");
//   console.log(`https://explorer.solana.com/address/${nftSigner.publicKey}?cluster=devnet`);
}


  return (
    <>
      <button
        className="w-24"
        onClick={createNft}
        disabled={!publicKey}
      >
        {isLoading ? "Loading" : "NFT"}
      </button>
    </>
  );
}
