import cacheVarDid from '../did/vosbt';
import VariableClient from './variable';

class NoCacheVariableClient extends VariableClient {
  construct({ identity, canisterId }) {
    this.identity = identity;
    this.canisterId = canisterId;
    this.did = cacheVarDid;

    return this;
  }

  static createAgent({ identity, canisterId }) {
    const client = new VariableClient({ identity, canisterId });
    return client.initAgent();
  }

  //   get : (nat64) -> (Result_3) query;
  get(votTokenId) {
    return this.agent.get_variable(votTokenId);
  }
}

export default NoCacheVariableClient;
