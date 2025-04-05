import {
  airdropIfRequired,
} from "@solana-developers/helpers";

import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
console.log("Connected to devnet!");

const publicKey = new PublicKey("GLFNFaEujqFTmVQvCJ2bXRdpvBkDtpvSjAZxtY2XAReN");

await airdropIfRequired(
  connection,
  publicKey,
  1 * LAMPORTS_PER_SOL,
  0.5 * LAMPORTS_PER_SOL
);
