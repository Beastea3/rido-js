import RidoClient from './ridoClient';
import vosbtDid from '../did/ncan';

class VosbtClient extends RidoClient {
  construct({ identity, canisterId }) {
    this.identity = identity;
    this.canisterId = canisterId;
    this.did = vosbtDid;
    return this;
  }

  static createAgent({ identity, canisterId }) {
    const client = new VosbtClient({ identity, canisterId });
    return client.initAgent();
  }

  //   vot_mint : (opt PubType, opt nat64, opt nat64) -> (nat64);
  async mint(type) {
    this.checkActive();
    return this.agent.mint(type);
  }

  //   vot_get_tokens : (principal) -> (vec nat64) query;
  async getTokens(address) {
    this.checkActive();
    return this.agent.get_token(address);
  }

  //  vot_owner_of : (nat64) -> (principal, opt text) query;
  async ownerOf(tokenId) {
    this.checkActive();
    return this.agent.owner_of(tokenId);
  }

  //  vot_update_pub_type : (nat64, PubType) -> ();
  async updatePubType(tokenId, pubtType) {
    this.checkActive();
    return this.agent.update_pub_type(tokenId, pubtType);
  }

  // vot_get_pub_type : (nat64) -> (PubType) query;
  async getPubtype(tokenId) {
    this.checkActive();
    return this.agent.get_pub_type(tokenId);
  }
}

export default VosbtClient;
