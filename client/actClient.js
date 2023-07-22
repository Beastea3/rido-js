import RidoClient from "./client";
import actDid from "../did/act";

class ACT_Client extends RidoClient {
  construct({ identity, canisterId }) {
    return new RidoClient({
      identity,
      canisterId,
      did: actDid,
    });
  }

  static createAgent({ identity, canisterId }) {
    const client = new ACT_Client({ identity, canisterId });
    return client.initAgent();
  }

  async mint(voNftTokenId, permissionType, expireaAt) {
    this.checkActive();
    return this.agent.mint(BigInt(0), voNftTokenId, BigInt(expireAt));
  }

  async mintTo(voNftTokenId, permissionType, expireAt, addr) {
    this.checkActive();
    // const expireAt = `${getTimeOfNextDay()}000000`;
    // console.log(BigInt(permissionType), _tokenId, BigInt(expireAt), addr);
    return this.agent.mint_to(
      BigInt(permissionType),
      voNftTokenId,
      BigInt(expireAt),
      addr
    );
  }

  async transferFrom(permissionType, _tokenId, voNftTokenId, srcAddr, tgtAddr) {
    this.checkActive();
    return this.agent.transfer_from(
      permissionType,
      _tokenId,
      voNftTokenId,
      srcAddr,
      tgtAddr
    );
  }

  async ownerOf(_tokenId, voNftTokenId, permissionType) {
    this.checkActive();
    return this.agent.owner_of(_tokenId, voNftTokenId, permissionType);
  }

  async permission(voNftTokenId, permissionType, expireaAt) {
    this.checkActive();
    return this.agent.mint(BigInt(0), voNftTokenId, BigInt(expireAt));
  }

  async expirationTime(_tokenId, voNftTokenId, permissionType) {
    this.checkActive();
    return this.agent.expiration_time(_tokenId, voNftTokenId, permissionType);
  }

  async approve(_tokenId, voNftTokenId, permissionType, addr) {
    this.checkActive();
    return this.agent.approve();
  }

  async unapprove(_tokenId, voNftTokenId, permissionType) {
    this.checkActive();
    return this.agent.unapprove();
  }

  async isApprovedForAll(srcAddr, tgtAddr) {
    this.checkActive();
    return this.agent.is_approved_for_all();
  }

  async setApprovalForAll(addr, approved) {
    this.checkActive();
    return this.agent.set_approval_for_all();
  }

  async getApproved(_tokenId, voNftTokenId, permissionType) {
    this.checkActive();
    return this.agent.get_approved();
  }

  async getToken(voNftTokenId, permissionType, addr) {
    this.checkActive();
    return this.agent.get_token();
  }

  async merge(voNftTokenId, permissionType, addr) {
    this.checkActive();
    return this.agent.merge();
  }
}

export default ACT_Client;
