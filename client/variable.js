import RidoClient from './ridoClient';
import varDid from '../did/vosbt';

class VariableClient extends RidoClient {
  construct({ identity, canisterId }) {
    this.identity = identity;
    this.canisterId = canisterId;
    this.did = varDid;

    return this;
  }

  static createAgent({ identity, canisterId }) {
    const client = new VariableClient({ identity, canisterId });
    return client.initAgent();
  }

  // public_read : () -> (int8) query;
  publicRead() {
    return this.agent.public_read();
  }

  // set : (nat64, vec nat8) -> (Result);
  set(votTokenId, content) {
    return this.agent.set_variable(votTokenId, content);
  }
}

export default VariableClient;
