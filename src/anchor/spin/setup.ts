import { IdlAccounts, Program } from "@coral-xyz/anchor";
import { IDL, SpinAndWinContract } from "./spin_and_win_contract";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const programId = new PublicKey("BZoNGJKTaTEJ8EcyZmmmUx7ijRaJ3ovFWLeTYvAM9MoH"); 

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

// Initialize the program interface with the IDL, program ID, and connection.
// This setup allows us to interact with the on-chain program using the defined interface.
export const program = new Program<SpinAndWinContract>(IDL, programId, {
  connection,
});

// Derive a PDA for the counter account, using "counter" as the seed.
// We'll use this to update the counter on-chain.
export const [SpinAndWinContractPDA] = PublicKey.findProgramAddressSync(
  [Buffer.from("SEED_POOL")],
  program.programId
);

// Define a TypeScript type for the Counter data structure based on the IDL.
// This ensures type safety when interacting with the "counter" account, facilitating development and maintenance.


// I commented
//export type CounterData = IdlAccounts<SpinAndWinContract>["superAdmin"];