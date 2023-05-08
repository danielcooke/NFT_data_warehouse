const { request } = require('graphql-request');
import { url, block_n, nfts_query } from "./constants.js";

describe('Test Accounts', () => {
    it('Returns the first five nfts', async () => {
        const variables = {first: 5, block_n: block_n};
        const data = await request(url, nfts_query, variables);
        expect(data).toEqual({
          "nfts": [
            {
              "id": "0x0111ac7e9425c891f935c4ce54cf16db7c14b7db-0x1",
              "collection": "0x0111ac7e9425c891f935c4ce54cf16db7c14b7db",
              "tokenID": "1",
              "owner": "0x774e7e46b7e737cbc415c7151224ae240a681254",
              "last_sale_price": "2000000000000000000",
              "last_transaction_hash": "0xce3d06e4977ff25994b22a0d01dba8a4bbf5883f426772287ee12e416134f982"
            },
            {
              "id": "0x0111ac7e9425c891f935c4ce54cf16db7c14b7db-0x12",
              "collection": "0x0111ac7e9425c891f935c4ce54cf16db7c14b7db",
              "tokenID": "18",
              "owner": "0x01ef3d78febebe0cb60f0be6c12c773576b0f13c",
              "last_sale_price": "800000000000000000000",
              "last_transaction_hash": "0xe4bff9f5d271551db359d0626b26b954155edff8caf3a532c1448789665beba2"
            },
            {
              "id": "0x0111ac7e9425c891f935c4ce54cf16db7c14b7db-0x145",
              "collection": "0x0111ac7e9425c891f935c4ce54cf16db7c14b7db",
              "tokenID": "325",
              "owner": "0x5f25921e99bdcf877395f14e6c2a2a567228ced3",
              "last_sale_price": "6086000000000000000000",
              "last_transaction_hash": "0xe526ae782d5645b179d8ed5d395d96b3408b8c24f7a4d6bd23f3960fcb4f221a"
            },
            {
              "id": "0x0111ac7e9425c891f935c4ce54cf16db7c14b7db-0x146",
              "collection": "0x0111ac7e9425c891f935c4ce54cf16db7c14b7db",
              "tokenID": "326",
              "owner": "0xbd76cc8788d07b9547e0027947b21901fedbf087",
              "last_sale_price": "5400000000000000000000",
              "last_transaction_hash": "0xa0bd4d50e4a0bf118b127f9e35238fa6c1cfe01b929a8bcbc574d1cb2a33babf"
            },
            {
              "id": "0x0111ac7e9425c891f935c4ce54cf16db7c14b7db-0x147",
              "collection": "0x0111ac7e9425c891f935c4ce54cf16db7c14b7db",
              "tokenID": "327",
              "owner": "0xbd76cc8788d07b9547e0027947b21901fedbf087",
              "last_sale_price": "5400000000000000000000",
              "last_transaction_hash": "0xa0bd4d50e4a0bf118b127f9e35238fa6c1cfe01b929a8bcbc574d1cb2a33babf"
            }
          ]
        });
    });
});
