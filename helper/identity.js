import { AuthClient } from "js-metamask-ii";
import { ethers, Wallet } from "ethers";

export const authClient = {
  authClient: null,
  async logIn() {
    //   setIslogin(true);
    authClient = await AuthClient.create();
    authClient.login({
      maxTimeToLive: BigInt(7) * BigInt(24) * BigInt(3_600_000_000_000), // 1 week
      onSuccess: () => {
        console.log("Login Successful!");
        const identity = authClient.getIdentity();
        setIdentity(identity);
        setIslogin(false);
      },
      onError: (error) => {
        console.error("Login Failed: ", error);
        setIslogin(false);
      },
    });
  },

  logout() {
    authClient.logout();
  },

  async signMessage({ setError, message }) {
    try {
      console.log({ message });
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signature = await signer.signMessage(message);
      const address = await signer.getAddress();

      return {
        message,
        signature,
        address,
      };
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  },
};
