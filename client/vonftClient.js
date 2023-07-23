import vonft from '../did/vonft';
import VosbtClient from './vosbtClient';

class VonftClient extends VosbtClient {
  construct({ identity, canisterId }) {
    this.identity = identity;
    this.canisterId = canisterId;
    this.did = vonft;

    return this;
  }

  static createAgent({ identity, canisterId }) {
    const client = new VonftClient({ identity, canisterId });
    return client.initAgent();
  }

  // vot_burn : (nat64) -> ();
  async burn(tokenId) {
    this.checkActive();
    return this.agent.burn(tokenId);
  }

  // vot_approve : (Account, nat64) -> ();
  async approve(address, tokenId) {
    this.checkActive();
    return this.agent.approve(address, tokenId);
  }

  // vot_unapprove : (nat64) -> ();
  async unapprove(tokenId) {
    this.checkActive();
    return this.agent.unapprove(tokenId);
  }

  // vot_get_approved : (nat64) -> (Account_1) query;
  async getApproved(tokenId) {
    this.checkActive();
    return this.agent.get_approved(tokenId);
  }

  // vot_is_approved_for_all : (Account, Account) -> (bool) query;
  async isApprovedForAll(srcAddr, tgtAddr) {
    this.checkActive();
    return this.agent.is_approved_for_all(srcAddr, tgtAddr);
  }

  // vot_set_approval_for_all : (Account, bool) -> ();
  async setApprovalForAll(addr, approved) {
    this.checkActive();
    return this.agent.set_approval_for_all(addr);
  }

  // vot_transfer_from : (Account, Account, nat64) -> ();
  async transferFrom(from, to, tokenId) {
    this.checkActive();
    return this.agent.transfer_from(from, to, tokenId);
  }
}

export default VonftClient;
