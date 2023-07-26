import { Identity } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';

export declare enum PubType {
  Read = { Read: null },
  Write = { Write: null },
  ReadWrite = { ReadWrite: null },
}

export declare class RidoClient {
  private agent;
}

export declare interface ClientConfig {
  identity?: Identity;
  canisterId?: string;
}

export declare class VosbtClient extends RidoClient {
  static create(config: ClientConfig): Promise<VosbtClient>;

  mint(pubType?: PubType): Promise<bigint>;
  getTokens(principal: Principal): Promise<BigInt64Array[]>;
  ownerOf(tokenId: BigInt): Promise<[Principal, null | string]>;
  updatePubType(tokenId: bigint, pubtType: PubType): Promise<void>;
  getPubtype(tokenId: bigint): Promise<PubType>;
}
export declare interface Account {
  Ic: Principal;
  Eth: string;
}

export declare interface Account_1 {
  ic: string;
  eth: string;
}
export declare class VonftClient extends VosbtClient {
  static create(config: ClientConfig): Promise<VosbtClient>;

  burn(tokenId: bigint): Promise<void>;
  approve(address: Account, tokenId: bigint): Promise<void>;
  unapprove(tokenId: BigInt): Promise<void>;
  getApproved(tokenId: BigInt): Promise<Account_1>;
  isApprovedForAll(srcAddr: Account, tgtAddr: Account): Promise<boolean>;
  setApprovalForAll(addr: Account, approved: boolean): Promise<void>;
  transferFrom(from: Account, to: Account, tokenId: BigInt): Promise<void>;
}

export declare interface Result {
    Ok?: any;
    Err?: any;
}
export declare class ActClient extends RidoClient {
  static create(config: ClientConfig): Promise<VosbtClient>;

  mint(tokenId: bigint): Promise<TokenResult>;
  mintTo(address: Account, tokenId: bigint): Promise<TokenResult>;
  transferFrom(
    from: Account,
    to: Account,
    tokenId: BigInt,
    voNftTokenId: BigInt,
  ): Promise<void>;
  ownerOf(tokenId: BigInt, voNftTokenId: BigInt): Promise<Account_1>;
  permission(srcAddr: Account, tgtAddr: Account): Promise<boolean>;
  expirationTime(tokenId: BigInt, voNftTokenId: BigInt): Promise<BigInt>;
  approve(addr: Account, _tokenId: BigInt, voNftTokenId: BigInt): Promise<void>;
  unapprove(tokenId: BigInt, voNftTokenId: BigInt): Promise<void>;
  isApprovedForAll(addr: Account): Promise<boolean>;
  setApprovalForAll(addr: Account, approved: boolean): Promise<void>;
  getApproved(voNftTokenId: BigInt, tokenId: BigInt): Promise<void>;
  getToken(addr: Account): Promise<BigInt[]>;
  merge(tokenId: BigInt, voNftTokenId: BigInt): Promise<Result>;
}

export declare class VariableClient extends RidoClient {
  static create(config: ClientConfig): Promise<VosbtClient>;

  publicRead(): Promise<number>;
  set(tokenId: bigint, content: string): Promise<Result>;
}

export declare class NoCacheVariableClient extends VariableClient {
  static create(config: ClientConfig): Promise<VosbtClient>;

  get(tokenId: BigInt): Promise<Result>;  
}
