import RidoClient from "./client";
import varDid from "../did/vosbt";

class VariableClient extends RidoClient {
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

  publicRead() {
    return this.agent.public_read();
  }

  set(votTokenId, content) {
    return this.agent.set_variable(votTokenId, content);
  }
}

export default VariableClient;
