import RidoClient from './ridoClient';
import actDid from '../did/act';

class ActClient extends RidoClient {
  construct({ identity, canisterId }) {
    this.identity = identity;
    this.canisterId = canisterId;
    this.did = actDid;

    return this;
  }

  static createAgent({ identity, canisterId }) {
    const client = new ActClient({ identity, canisterId });
    return client.initAgent();
  }

  // act_mint : (nat8, nat64, nat64) -> (Result_1);
  async mint(voNftTokenId, permissionType, expireAt) {
    this.checkActive();
    return this.agent.mint(BigInt(0), voNftTokenId, BigInt(expireAt));
  }

  // act_mint_to : (nat8, nat64, nat64, Account) -> (Result_1);
  async mintTo(voNftTokenId, permissionType, expireAt, addr) {
    this.checkActive();
    // const expireAt = `${getTimeOfNextDay()}000000`;
    // console.log(BigInt(permissionType), _tokenId, BigInt(expireAt), addr);
    return this.agent.mint_to(
      BigInt(permissionType),
      voNftTokenId,
      BigInt(expireAt),
      addr,
    );
  }

  async transferFrom(permissionType, _tokenId, voNftTokenId, srcAddr, tgtAddr) {
    this.checkActive();
    return this.agent.transfer_from(
      permissionType,
      _tokenId,
      voNftTokenId,
      srcAddr,
      tgtAddr,
    );
  }

  // act_transfer_from : (Account, Account, nat64, nat64) -> ();
  async ownerOf(_tokenId, voNftTokenId, permissionType) {
    this.checkActive();
    return this.agent.owner_of(_tokenId, voNftTokenId, permissionType);
  }

  // permission : (nat8, Account, nat64) -> (Result_4) query;
  async permission(voNftTokenId, permissionType, expireaAt) {
    this.checkActive();
    return this.agent.mint(BigInt(0), voNftTokenId, BigInt(expireAt));
  }

  // act_expiration_time : (nat64, nat64) -> (nat64) query;
  async expirationTime(_tokenId, voNftTokenId, permissionType) {
    this.checkActive();
    return this.agent.expiration_time(_tokenId, voNftTokenId, permissionType);
  }

  // act_approve : (Account, nat64, nat64) -> ();
  async approve(_tokenId, voNftTokenId, permissionType, addr) {
    this.checkActive();
    return this.agent.approve();
  }

  // act_unapprove : (nat64, nat64) -> ();
  async unapprove(_tokenId, voNftTokenId, permissionType) {
    this.checkActive();
    return this.agent.unapprove();
  }

  // act_is_approved_for_all : (Account, Account) -> (bool) query;
  async isApprovedForAll(srcAddr, tgtAddr) {
    this.checkActive();
    return this.agent.is_approved_for_all();
  }

  // act_set_approval_for_all : (Account, bool) -> ();
  async setApprovalForAll(addr, approved) {
    this.checkActive();
    return this.agent.set_approval_for_all();
  }

  // act_get_approved : (nat64, nat64) -> (Account_1) query;
  async getApproved(_tokenId, voNftTokenId, permissionType) {
    this.checkActive();
    return this.agent.get_approved();
  }

  // act_get_user_tokens : (Account, nat64) -> (vec nat64) query;
  async getToken(voNftTokenId, permissionType, addr) {
    this.checkActive();
    return this.agent.get_token();
  }

  // act_merge : (nat8, nat64, principal) -> (Result);
  async merge(voNftTokenId, permissionType, addr) {
    this.checkActive();
    return this.agent.merge();
  }
}

export default ActClient;
