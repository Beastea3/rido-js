import RidoClient from "./client";
import vosbtDid from "../did/vosbt";

class VOSBT_Client extends RidoClient {
  construct({ identity, canisterId }) {
    return new RidoClient({
      identity,
      canisterId,
      did: vosbtDid,
    });
  }

  static createAgent({ identity, canisterId }) {
    const client = new VOSBT_Client({ identity, canisterId });
    return client.initAgent();
  }

  async mint() {
    if (!this.actor) {
      throw new Error("Agent not initialized.");
    }
    return this.agent.mint([], [], []);
  }
}

export default VOSBT_Client;
