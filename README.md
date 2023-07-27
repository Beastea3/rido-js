### Example of Usage
`npm i -S ridojs`
```js
// import Client Classes you need
import { NoCacheVariableClient, Auth } from 'ridojs';

// setIdentity is a callback to return the principal
Auth.logIn(setIdentity);

// this function should be called in useEffect hook once authClient is ready
const initClient = async () => {
  if (identity) {
    const vosbtClient = await NoCacheVariableClient.create({
      identity,
      canisterId: '5oghd-zqaaa-aaaal-qcada-cai',
    });
    console.log({ vosbtClient });
    // save Client to memory for future use
    setClient(vosbtClient);
  }
};

// invoke specific method of RIDO
const call = async () => {
  const result = await client.get(BigInt(2));
  return result;
};
```
