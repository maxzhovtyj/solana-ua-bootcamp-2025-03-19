use std::str::FromStr;
use solana_client::rpc_client::RpcClient;
use solana_sdk::native_token::LAMPORTS_PER_SOL;
use solana_sdk::pubkey::Pubkey;

fn main() {
    let conn = RpcClient::new("https://api.devnet.solana.com");

    let public_key = Pubkey::from_str("FKV9HNf8uPnMYGYVv2zAeLf3KDugtChwbg3oZrAXYcdo").expect("invalid pubkey");

    let account_balance = conn.get_balance(&public_key).expect("failed to get balance");

    println!("Balance: {}", account_balance / LAMPORTS_PER_SOL);
}