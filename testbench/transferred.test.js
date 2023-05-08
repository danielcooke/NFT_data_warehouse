const { request } = require('graphql-request');
import { url, block_n, transferred_ownerships_query } from "./constants.js";

describe('Test Transferred Ownerships', () => {
    it('Returns the first five transferred ownerships', async () => {
        const variables = {first: 5, block_n: block_n};
        const data = await request(url, transferred_ownerships_query, variables);
        expect(data).toEqual({
          "ownershipTransferreds": [
            {
              "id": "0xebe6bd9d1da992b9a6f816564eafef42e9bf68d3876fae22556cc63da6fc0f6615000000",
              "previousOwner": "0x0084a81668b9a978416abeb88bc1572816cc7cac",
              "newOwner": "0xa839d4b5a36265795eba6894651a8af3d0ae2e68",
              "blockNumber": "5774764",
              "blockTimestamp": "1528789410",
              "transactionHash": "0xebe6bd9d1da992b9a6f816564eafef42e9bf68d3876fae22556cc63da6fc0f66"
            }
          ]
        });
    });
});
