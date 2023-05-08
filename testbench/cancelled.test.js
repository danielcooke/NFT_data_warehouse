const { request } = require('graphql-request');
import { url, block_n, cancelled_orders_query } from "./constants.js";

describe('Test Matched Orders', () => {
    it('Returns the first five cancelled orders', async () => {
        const variables = {first: 5, block_n: block_n};
        const data = await request(url, cancelled_orders_query, variables);
        expect(data).toEqual({
          "orderCancelleds": [
            {
              "id": "0x000120fa578ff975c042bfd27d8e38879e9a9b791f815a077f49c7ae8999778740000000",
              "hash": "0xe9b334ffcf4e0def28db020e931c4e8bb5cf3c524e3e11ce5efbff8e03a142f8",
              "blockNumber": "6117672",
              "blockTimestamp": "1533836980",
              "transactionHash": "0x000120fa578ff975c042bfd27d8e38879e9a9b791f815a077f49c7ae89997787"
            },
            {
              "id": "0x00015e21256a7c8fee3d8768df43daa9675feff7fdc11abc6ffeb582efb6c31050000000",
              "hash": "0xe359d0b9788b228420f3a86872099c8922462964f13df4641fd006610a773f58",
              "blockNumber": "7412052",
              "blockTimestamp": "1553169948",
              "transactionHash": "0x00015e21256a7c8fee3d8768df43daa9675feff7fdc11abc6ffeb582efb6c310"
            },
            {
              "id": "0x0004955381ee5835801b7764d9ffd7b646fa46e965549130f0c6f128a514c06a18000000",
              "hash": "0x5a3344f80152c9eb5616fd05b459661c47701103e2d4714b73dbde15e8827061",
              "blockNumber": "7840760",
              "blockTimestamp": "1558947647",
              "transactionHash": "0x0004955381ee5835801b7764d9ffd7b646fa46e965549130f0c6f128a514c06a"
            },
            {
              "id": "0x000a23a6fb9e0cab3a8564395fd91088f8fd9e2b5b7726157719837da1d2c98256000000",
              "hash": "0x96e429a40f4d784f30db5523f90bff4a6e1ff5079dff34a79d0993259408daf9",
              "blockNumber": "7466815",
              "blockTimestamp": "1553908864",
              "transactionHash": "0x000a23a6fb9e0cab3a8564395fd91088f8fd9e2b5b7726157719837da1d2c982"
            },
            {
              "id": "0x000d67d0446d910ed1c0cb2e1ca33808ebe3dbd329ed23e0facacf25b950d6293d000000",
              "hash": "0x2d02e428d500222212a9b6d8b58c5fa667269b0085fc2baf22f4c0d4b4361a63",
              "blockNumber": "7360766",
              "blockTimestamp": "1552480841",
              "transactionHash": "0x000d67d0446d910ed1c0cb2e1ca33808ebe3dbd329ed23e0facacf25b950d629"
            }
          ]
        });
    });
});
