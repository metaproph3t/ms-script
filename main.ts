import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import * as multisig from "@sqds/multisig";

async function main() {
  const { Permission, Permissions } = multisig.types;

  let connection = new Connection("https://mainnet.helius-rpc.com/?api-key=3f6d553e-de08-4fb9-9212-5d87bbfd1328");

  let ms = new PublicKey("FpMnruqVCxh3o2oBFZ9uSQmshiyfMqzeJ3YfNQfP9tHy");

  const createKey = Keypair.generate().publicKey;

  const [multisigPda] = multisig.getMultisigPda({
    createKey
  });

  console.log(multisigPda);
}

main();
