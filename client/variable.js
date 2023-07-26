import RidoClient from './ridoClient.js';
import varDid from '../did/ncan.js';

class VariableClient extends RidoClient {
  construct({ identity, canisterId }) {
    this.identity = identity;
    this.canisterId = canisterId;
    this.did = varDid;

    return this;
  }

  static async create({ identity, canisterId }) {
    const client = new varDid({});
    client.agent = await client.initAgent(varDid, identity, canisterId);
    // return this;
    return client;
  }

  // public_read : () -> (int8) query;
  publicRead() {
    return this.agent.public_read();
  }

  // set : (nat64, vec nat8) -> (Result);
  set(votTokenId, content) {
    return this.agent.set(votTokenId, content);
  }
}

export default VariableClient;
