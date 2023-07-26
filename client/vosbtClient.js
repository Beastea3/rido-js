import RidoClient from './ridoClient.js';
import vosbtDid from '../did/ncan.js';

class VosbtClient extends RidoClient {
  construct({ identity, canisterId }) {
    this.identity = identity;
    this.canisterId = canisterId;
    this.did = vosbtDid;
    // console.log('===?', this);
    return this;
  }

  static async create({ identity, canisterId }) {
    const client = new VosbtClient({});
    client.agent = await client.initAgent(vosbtDid, identity, canisterId);
    // return this;
    return client;
  }

  //   vot_mint : (opt PubType, opt nat64, opt nat64) -> (nat64);
  async mint(type) {
    this.checkActive();
    const args = [[], [], []];
    if (type) {
      args[0] = [type];
    }
    return this.agent.vot_mint(...args);
  }

  //   vot_get_tokens : (principal) -> (vec nat64) query;
  async getTokens(principal) {
    this.checkActive();
    return this.agent.vot_get_tokens(principal);
  }

  //  vot_owner_of : (nat64) -> (principal, opt text) query;
  async ownerOf(tokenId) {
    this.checkActive();
    return this.agent.vot_owner_of((tokenId));
  }

  //  vot_update_pub_type : (nat64, PubType) -> ();
  async updatePubType(tokenId, pubtType) {
    this.checkActive();
    return this.agent.vot_update_pub_type(tokenId, pubtType);
  }

  // vot_get_pub_type : (nat64) -> (PubType) query;
  async getPubtype(tokenId) {
    this.checkActive();
    return this.agent.vot_get_pub_type(tokenId);
  }
}

export default VosbtClient;
