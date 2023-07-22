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

  async mint(type) {
    this.checkActive();
    //
    return this.agent.mint(type);
  }

  async getToken(address) {
    this.checkActive();
    return this.agent.get_token(address);
  }

  async ownerOf(tokenId) {
    this.checkActive();
    return this.agent.owner_of(tokenId);
  }

  async updatePubType(tokenId, pubtType) {
    this.checkActive();
    return this.agent.update_pub_type(tokenId, pubtType);
  }

  async getPubtype(tokenId) {
    this.checkActive();
    return this.agent.get_pub_type(tokenId);
  }
}

export default VOSBT_Client;
