import "dotenv/config";
import { getExplorerLink } from "@solana-developers/helpers";
import { Connection, Keypair, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";

let privateKey = process.env["SECRET_KEY"];
if (privateKey === undefined) {
  console.log("Add SECRET_KEY to .env!");
  process.exit(1);
}
const asArray = Uint8Array.from(JSON.parse(privateKey));
const sender = Keypair.fromSecretKey(asArray);

const connection = new Connection(clusterApiUrl("devnet"));

console.log(`🔑 Our pubic key is: ${sender.publicKey.toBase58()}`);

const mintAccount = new PublicKey(
  "DLLSM9W38TJEZh8tQovhdduDUFXtcEKoPhrfPM1bjs6C"
);

const recipient = new PublicKey("GLFNFaEujqFTmVQvCJ2bXRdpvBkDtpvSjAZxtY2XAReN");

const tokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  sender,
  mintAccount,
  recipient
);

console.log(`Token Account: ${tokenAccount.address.toBase58()}`);

const link = getExplorerLink(
  "address",
  tokenAccount.address.toBase58(),
  "devnet"
);

console.log(`✅ Created token account: ${link}`);