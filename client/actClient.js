import RidoClient from './ridoClient.js';
import actDid from '../did/ncan.js';

class ActClient extends RidoClient {
  construct({ identity, canisterId }) {
    this.identity = identity;
    this.canisterId = canisterId;
    this.did = actDid;

    return this;
  }

  static async create({ identity, canisterId }) {
    const client = new ActClient({});
    client.agent = await client.initAgent(actDid, identity, canisterId);
    // return this;
    return client;
  }

  // act_mint : (nat8, nat64, nat64) -> (Result_1);
  async mint(permissionType, voNftTokenId, expireAt) {
    this.checkActive();
    return this.agent.act_mint(
      permissionType,
      BigInt(voNftTokenId),
      BigInt(expireAt),
    );
  }

  // act_mint_to : (nat8, nat64, nat64, Account) -> (Result_1);
  async mintTo(permissionType, voNftTokenId, expireAt, to) {
    this.checkActive();
    // const expireAt = `${getTimeOfNextDay()}000000`;
    // console.log(BigInt(permissionType), _tokenId, BigInt(expireAt), addr);
    return this.agent.act_mint_to(
      permissionType,
      voNftTokenId,
      BigInt(expireAt),
      { Eth: to },
    );
  }

  // act_transfer_from : (Account, Account, nat64, nat64) -> ();
  async transferFrom(from, to, _tokenId, voNftTokenId) {
    this.checkActive();
    return this.agent.act_transfer_from(
      { Eth: from },
      { Eth: to },
      _tokenId,
      voNftTokenId,
    );
  }

  //     act_owner_of: IDL.Func(
  //   [IDL.Nat64, IDL.Nat64],
  //   [IDL.Principal, IDL.Opt(IDL.Text)],
  //   ['query'],
  // ),
  async ownerOf(_tokenId, voNftTokenId) {
    this.checkActive();
    return this.agent.act_owner_of(_tokenId, voNftTokenId);
  }

  // permission : (nat8, Account, nat64) -> (Result_4) query;
  async permission(permissionType, addr, voNftTokenId) {
    this.checkActive();
    return this.agent.permission(permissionType, { Eth: addr }, voNftTokenId);
  }

  // act_expiration_time : (nat64, nat64) -> (nat64) query;
  async expirationTime(_tokenId, voNftTokenId) {
    this.checkActive();
    const expirationTime = await this.agent.act_expiration_time(
      _tokenId,
      voNftTokenId,
    );
    return { expirationTime };
  }

  // act_approve : (Account, nat64, nat64) -> ();
  async approve(addr, _tokenId, voNftTokenId) {
    this.checkActive();
    return this.agent.act_approve({ Eth: addr }, _tokenId, voNftTokenId);
  }

  // act_unapprove : (nat64, nat64) -> ();
  async unapprove(_tokenId, voNftTokenId) {
    this.checkActive();
    return this.agent.act_unapprove(_tokenId, voNftTokenId);
  }

  // act_is_approved_for_all : (Account, Account) -> (bool) query;
  async isApprovedForAll(owner, operator) {
    this.checkActive();
    return this.agent.act_is_approved_for_all(
      { Eth: owner },
      { Eth: operator },
    );
  }

  // act_set_approval_for_all : (Account, bool) -> ();
  async setApprovalForAll(operator, approved) {
    this.checkActive();
    return this.agent.act_set_approval_for_all({ Eth: operator }, approved);
  }

  // act_get_approved : (nat64, nat64) -> (Account_1) query;
  async getApproved(_tokenId, voNftTokenId) {
    this.checkActive();
    return this.agent.act_get_approved(voNftTokenId, _tokenId);
  }

  // act_get_user_tokens : (Account, nat64) -> (vec nat64) query;
  async getToken(owner, voNftTokenId) {
    this.checkActive();
    return this.agent.act_get_user_tokens({ Eth: owner }, voNftTokenId);
  }

  // act_merge : (nat8, nat64, principal) -> (Result);
  async merge(permissionType, voNftTokenId, principal) {
    this.checkActive();
    return this.agent.act_merge(permissionType, voNftTokenId, principal);
  }
}

export default ActClient;
