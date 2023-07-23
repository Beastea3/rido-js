import { Identity } from '@dfinity/agent';
import { IDL } from '@dfinity/candid';

export declare class RidoClient {
    identity: Identity;
    did: IDL.InterfaceFactory;
    canisterId: string;
    private agent;

    initAgent(): Promise<void>;
}

export declare class VosbtClient extends RidoClient {
    burn(tokenId: bigint): Promise<void>;
    approve(address: string, tokenId: bigint): Promise<void>;
}