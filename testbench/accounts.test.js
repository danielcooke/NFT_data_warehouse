const { request } = require('graphql-request');
import { url, block_n, accounts_query } from "./constants.js";

describe('Test Accounts', () => {
    it('Returns the first five accounts', async () => {
        const variables = {first: 5, block_n: block_n};
        const data = await request(url, accounts_query, variables);
        expect(data).toEqual({
          "accounts": [
            {
              "id": "0x0002fd0f1d0708fdf065d3625b2ee83d210d58d9",
              "num_buys": "0",
              "num_sells": "8",
              "total_transactions": "8",
              "most_recent_tranaction_hash": "0x899b8d355f156641687f35ec2e8fc4a1901d9e8894c5c326372b2f77573f8beb"
            },
            {
              "id": "0x0006e4548aed4502ec8c844567840ce6ef1013f5",
              "num_buys": "1",
              "num_sells": "0",
              "total_transactions": "1",
              "most_recent_tranaction_hash": "0xe727cc2e0eb4c3e3ef078d058f21a82ffe1b8180f131aa1f05e6ec0c4ae5e604"
            },
            {
              "id": "0x0008d343091ef8bd3efa730f6aae5a26a285c7a2",
              "num_buys": "38",
              "num_sells": "9",
              "total_transactions": "47",
              "most_recent_tranaction_hash": "0x0cc4fdb29c4ae9f6df2c9559cca1d17f07b614094822f4e4d843e64f7805ed53"
            },
            {
              "id": "0x000b75fcdc15d41277deb033c72d2c8d774ccced",
              "num_buys": "3",
              "num_sells": "7",
              "total_transactions": "10",
              "most_recent_tranaction_hash": "0x1a6a5af9076b961f22a6d77cbb88b42774ca0cd9f5c3dbbf671c2e1197f9918d"
            },
            {
              "id": "0x0013d759a369091f3d2d1d1a516adaf068f67923",
              "num_buys": "3",
              "num_sells": "12",
              "total_transactions": "15",
              "most_recent_tranaction_hash": "0x561950113653e611b746bf961836940f68a7739599aa8aa75a3987a5cdd4cae3"
            }
          ]
        });
    });
});
