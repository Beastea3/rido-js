import RidoClient from "./client";
import vonft from "../did/vonft";

class VONFT_Client extends RidoClient {
  construct({ identity, canisterId }) {
    return new RidoClient({
      identity,
      canisterId,
      did: vonft,
    });
  }

  static createAgent({ identity, canisterId }) {
    const client = new VONFT_Client({ identity, canisterId });
    return client.initAgent();
  }

  async mint() {
    if (!this.actor) {
      throw new Error("Agent not initialized.");
    }
    return this.agent.mint([], [], []);
  }
}

export default VONFT_Client;
