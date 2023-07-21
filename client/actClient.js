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

  async mintTo(_tokenId, permissionType, expireAt, addr) {
    this.checkActive();
    // const expireAt = `${getTimeOfNextDay()}000000`;
    // console.log(BigInt(permissionType), _tokenId, BigInt(expireAt), addr);
    return this.agent.mint_to(
      BigInt(permissionType),
      _tokenId,
      BigInt(expireAt),
      addr
    );
  }

  async mint(_tokenId, permissionType, expireaAt) {
    this.checkActive();
    return this.agent.mint(BigInt(0), _tokenId, BigInt(expireAt));
  }

  async transfer(permissionType, _tokenId, voNftTokenId, from, to) {
    this.checkActive();
    return this.agent.transfer(
      permissionType,
      _tokenId,
      voNftTokenId,
      from,
      to
    );
  }

  async ownerOf(_tokenId, voNftTokenId, permissionType) {
    this.checkActive();
    return this.agent.owner_of(_tokenId, voNftTokenId, permissionType);
  }

  async permiossion(_tokenId, permissionType, expireaAt) {
    this.checkActive();
    return this.agent.mint(BigInt(0), _tokenId, BigInt(expireAt));
  }

  async expirationTime(_tokenId, voNftTokenId, permissionType) {
    this.checkActive();
    return this.agent.expiration_time(_tokenId, voNftTokenId, permissionType);
  }

  async approve(_tokenId, voNftTokenId, permissionType, expireaAt) {
    this.checkActive();
    return this.agent.approve();
  }

  async unapprove(_tokenId, permissionType, expireaAt) {
    this.checkActive();
    return this.agent.unapprove();
  }

  async isApprovedForAll(_tokenId, permissionType, expireaAt) {
    this.checkActive();
    return this.agent.is_approved_for_all();
  }

  async setApprovalForAll(_tokenId, permissionType, expireaAt) {
    this.checkActive();
    return this.agent.set_approval_for_all();
  }

  async getApproved(_tokenId, permissionType, expireaAt) {
    this.checkActive();
    return this.agent.get_approved();
  }

  async getToken(_tokenId, permissionType, expireaAt) {
    this.checkActive();
    return this.agent.get_token();
  }

  async merge(_tokenId, permissionType, addr) {
    this.checkActive();
    return this.agent.merge();
  }
}

export default ACT_Client;
