# RIDO-Js

The JS dev kit for RIDO

## Quick Start

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

## Features

### client/

This folder contains all clients to interact with RIDO.

| File Name          | Description                            |
| ------------------ | -------------------------------------- |
| ridoClient.js      | Initialization of all clients          |
| vosbtClient.js     | Basic methods for VONFT and VOSBT      |
| vonftClient.js     | Operate the VONFTs                     |
| actClient.js       | Operate the ACTs                        |
| variableClient.js  | Operate the Variables                  |
| noCacheVariable.js | Operate the No-Cache variables         |
| relayerClient.js   | Call the APIs provided by RIDO relayer |

### helper/

This folder contains some tools you can use to interact with RIDO.

| File Name   | Description                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| identity.js | To generate the identity required by the construction of clients, you can also generate identity by yourself with other libraries. |

### did/

This folder contains all candid files of RIDO.
