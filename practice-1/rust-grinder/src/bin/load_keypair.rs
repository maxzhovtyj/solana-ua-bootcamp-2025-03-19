use dotenv;

use solana_sdk::signature::Keypair;
use solana_sdk::signer::{SeedDerivable, Signer};

fn main() {
    dotenv::dotenv().ok();

    let secret_key = match dotenv::var("SECRET_KEY") {
        Ok(a ) => a,
        Err(_) => {
            panic!("PRIVATE_KEY environment variable not set");
        }
    };

    let secret_key: Vec<u8> = match serde_json::from_str(&secret_key) {
        Ok(a) => a,
        Err(err) => {
            panic!("error parsing private key JSON: {err}");
        }
    };

    let keypair = match Keypair::from_seed(&secret_key) {
        Ok(a) => a,
        Err(err) => {
            panic!("error creating keypair {err}");
        }
    };

    println!("Public key: {}", keypair.pubkey())
}
