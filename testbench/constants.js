export const url = 'https://api.studio.thegraph.com/query/45425/opensea-test-dillon/v0.2.6';
export const block_n = 7945259;

export const trades_collection_query = `query testTradesCollection($first: Int,
$block_n: Int)
{
  trades(first: $first, block: { number: $block_n}) {
    id
    collection {
      id
      name
    }
  }
}
`;
export const trades_tx_hash_query = `query testTradesTxHash($first: Int, $block_n: Int)
{
  trades(first: $first, block: { number: $block_n}) {
    id
    tokenId
    buyer
    seller
    transactionHash
  }
}
`;

export const orders_query = `query testOrders($first: Int, $block_n: Int)
{
  orders(first: $first, block: { number: $block_n}) {
    id
    price
    payToken
    maker
    taker
    listingTime
    side
  }
}
`;

export const approved_parts_query = `query testApprovedParts($first: Int,
$block_n: Int)
{
  orderApprovedPartOnes(first: $first, block: { number: $block_n} ) {
    id
    hash
    exchange
    maker
  }
  orderApprovedPartTwos(first: $first, block: { number: $block_n}) {
    id
    hash
    howToCall
    calldata
  }
}
`;

export const approved_orders_query = `query testApprovedOrder($first: Int,
$block_n: Int)
{
  orderApproveds(first: $first, block: {number: $block_n}) {
    id
    hash
    exchange
    maker
    taker
    makerRelayerFee
    takerRelayerFee
    makerProtocolFee
    takerProtocolFee
    feeRecipient
    feeMethod
    side
    saleKind
    target
    blockNumber
    blockTimestamp
    transactionHash

    howToCall
    calldata
    replacementPattern
    staticTarget
    staticExtradata
    paymentToken
    basePrice
    extra
    listingTime
    expirationTime
    salt
    orderbookInclusionDesired
  }
}
`;

export const cancelled_orders_query = `query testCancelledOrder($first: Int,
$block_n: Int)
{
  orderCancelleds(first: $first, block: {number: $block_n}) {
    id
    hash
    blockNumber
    blockTimestamp
    transactionHash
  }
}
`;

export const transferred_ownerships_query = `query testTransferredOwnerships($first: Int,
$block_n: Int)
{
  ownershipTransferreds(first: $first, block: {number: $block_n}) {
    id
    previousOwner
    newOwner
    blockNumber
    blockTimestamp
    transactionHash
  }
}
`;

export const renounced_ownerships_query = `query testRenouncedOwnerships($first: Int,
$block_n: Int)
{
  ownershipRenounceds(first: $first, block: {number: $block_n}) {
    id
    previousOwner
    blockNumber
    blockTimestamp
    transactionHash
  }
}
`;

export const accounts_query = `query testAccounts($first: Int, $block_n: Int)
{
  accounts(first: $first, block: {number: $block_n}) {
    id
    num_buys
    num_sells
    total_transactions
    most_recent_tranaction_hash
  }
}
`;

export const nfts_query = `query testNfts($first: Int, $block_n: Int)
{
  nfts(first: $first,  block: { number: $block_n}) {
    id
    collection
    tokenID
    owner
    last_sale_price
    last_transaction_hash
  }
}
`;
