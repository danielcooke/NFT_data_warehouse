const { request } = require('graphql-request');
import { url, block_n, renounced_ownerships_query } from "./constants.js";

describe('Test Renounced Ownerships', () => {
    it('Returns the first five renounced ownerships', async () => {
        const variables = {first: 5, block_n: block_n};
        const data = await request(url, renounced_ownerships_query, variables);
        expect(data).toEqual({
          "ownershipRenounceds": []
        });
    });
});
