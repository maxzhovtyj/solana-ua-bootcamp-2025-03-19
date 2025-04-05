use solana_sdk::{signature::Keypair, signer::Signer};

fn main() {
    let keypair = Keypair::new();
    println!("{}", keypair.pubkey());
    println!("{:?}", keypair.secret().to_bytes());
}