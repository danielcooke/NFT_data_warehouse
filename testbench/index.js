import { url, block_n, trades_collection_query, trades_tx_hash_query, orders_query } from "./constants.js";
const first = 15;

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query: orders_query,
    variables: { first, block_n },
  })
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
