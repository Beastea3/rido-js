import { Actor, HttpAgent } from "@dfinity/agent";

class RidoClient {
  agent;

  construct({ identity, did, canisterId }) {
    this.identity = identity;
    this.did = did;
    this.canisterId = canisterId;
    this.agent = null;
    return this;
  }

  checkActive() {
    if (this.agent) {
      return;
    }
    throw new Error('Agent has not been initialized.')
  }

  async initAgent() {
    this.agent = await Actor.createActor(did, {
        agent: new HttpAgent({
          host: "https://ic0.app",
          identity: _identity,
        }),
        canisterId,
      });
  }

  static createAgent({ identity, did, canisterId }) {
    const client = new RidoClient({ identity, did, canisterId });
    return client.initAgent();
  }
}

export default RidoClient;
