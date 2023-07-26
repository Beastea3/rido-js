import vonft from '../did/ncan.js';
import VosbtClient from './vosbtClient.js';

class VonftClient extends VosbtClient {
  construct({ identity, canisterId }) {
    this.identity = identity;
    this.canisterId = canisterId;
    this.did = vonft;

    return this;
  }

  static async create({ identity, canisterId }) {
    const client = new VonftClient({});
    client.agent = await client.initAgent(vonft, identity, canisterId);
    // return this;
    return client;
  }

  // vot_burn : (nat64) -> ();
  async burn(tokenId) {
    this.checkActive();
    return this.agent.vot_burn(tokenId);
  }

  // vot_approve : (Account, nat64) -> ();
  async approve(address, tokenId) {
    this.checkActive();
    return this.agent.vot_approve({ Eth: address }, tokenId);
  }

  // vot_unapprove : (nat64) -> ();
  async unapprove(tokenId) {
    this.checkActive();
    return this.agent.vot_unapprove(tokenId);
  }

  // vot_get_approved : (nat64) -> (Account_1) query;
  async getApproved(tokenId) {
    this.checkActive();
    return this.agent.vot_get_approved(tokenId);
  }

  // vot_is_approved_for_all : (Account, Account) -> (bool) query;
  async isApprovedForAll(srcAddr, tgtAddr) {
    this.checkActive();
    return this.agent.vot_is_approved_for_all(
      { Eth: srcAddr },
      { Eth: tgtAddr },
    );
  }

  // vot_set_approval_for_all : (Account, bool) -> ();
  async setApprovalForAll(addr, approved) {
    this.checkActive();
    return this.agent.vot_set_approval_for_all({ Eth: addr }, approved);
  }

  // vot_transfer_from : (Account, Account, nat64) -> ();
  async transferFrom(from, to, tokenId) {
    this.checkActive();
    return this.agent.vot_transfer_from({ Eth: from }, { Eth: to }, tokenId);
  }
}

export default VonftClient;
