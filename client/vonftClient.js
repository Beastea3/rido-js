import RidoClient from "./client";
import vonft from "../did/vonft";
import VOSBT_Client from "./vosbtClient";
class VONFT_Client extends VOSBT_Client {
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

  async burn(tokenId) {
    this.checkActive();
    return this.agent.burn(tokenId);
  }

  async approve(address, tokenId) {
    this.checkActive();
    return this.agent.approve(address, tokenId);
  }

  async unapprove(tokenId) {
    this.checkActive();
    return this.agent.unapprove(tokenId);
  }

  async getApproved(tokenId) {
    this.checkActive();
    return this.agent.get_approved(tokenId);
  }

  async isApprovedForAll(srcAddr, tgtAddr) {
    this.checkActive();
    return this.agent.is_approved_for_all(srcAddr, tgtAddr);
  }

  async setApprovalForAll(addr) {
    this.checkActive();
    return this.agent.set_approval_for_all(addr);
  }

  async transfer(from, to, tokenId) {
    this.checkActive();
    return this.agent.transfer(from, to, tokenId);
  }
}

export default VONFT_Client;
