import cacheVarDid from '../did/ncan.js';
import VariableClient from './variable';

class NoCacheVariableClient extends VariableClient {
  construct({ identity, canisterId }) {
    this.identity = identity;
    this.canisterId = canisterId;
    this.did = cacheVarDid;

    return this;
  }

  static async create({ identity, canisterId }) {
    const client = new varDid({});
    client.agent = await client.initAgent(cacheVarDid, identity, canisterId);
    // return this;
    return client;
  }

  //   get : (nat64) -> (Result_3) query;
  get(votTokenId) {
    return this.agent.get(votTokenId);
  }
}

export default NoCacheVariableClient;
