import RidoClient from "./client";
import cacheVarDid from "../did/vosbt";
import VariableClient from "./variable";

class NoCacheVariableClient extends VariableClient {
  construct({ identity, canisterId }) {
    return new RidoClient({
      identity,
      canisterId,
      did: cacheVarDid,
    });
  }

  static createAgent({ identity, canisterId }) {
    const client = new VOSBT_Client({ identity, canisterId });
    return client.initAgent();
  }

  get(votTokenId) {
    return this.agent.get_variable(votTokenId);
  }
}

export default NoCacheVariableClient;
