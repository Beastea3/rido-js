import RidoClient from "./client";
import actDid from "../did/act";

class ACT_Client extends RidoClient {
  construct({ identity, canisterId }) {
    return new RidoClient({
      identity,
      canisterId,
      did: actDid,
    });
  }

  static createAgent({ identity, canisterId }) {
    const client = new ACT_Client({ identity, canisterId });
    return client.initAgent();
  }

  async mintTo(_tokenId, addr) {
    if (!this.actor) {
      throw new Error("Agent not initialized.");
    }
    const expireAt = `${getTimeOfNextDay()}000000`;
    console.log(BigInt(0), _tokenId, BigInt(expireAt), addr);
    return this.agent.mint_to(BigInt(0), _tokenId, BigInt(expireAt), addr);
  }
}

export default ACT_Client;
