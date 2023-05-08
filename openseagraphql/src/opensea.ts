import {
  OrderApprovedPartOne as OrderApprovedPartOneEvent,
  OrderApprovedPartTwo as OrderApprovedPartTwoEvent,
  OrderCancelled as OrderCancelledEvent,
  OrdersMatched as OrdersMatchedEvent,
  OwnershipRenounced as OwnershipRenouncedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/opensea/opensea"
import {
  OrderApproved,
  OrderApprovedPartOne,
  OrderApprovedPartTwo,
  OrderCancelled,
  OwnershipRenounced,
  OwnershipTransferred
} from "../generated/schema"
import {
  getOrCreateAccount, 
  getOrCreateNFT, 
} from './helper'
import { Address, BigInt, Bytes, ethereum } from '@graphprotocol/graph-ts'

//resolver that adds paramaters from orderapprovedpartone into a single orderapproved entity
export function handleOrderApprovedPartOne(
  event: OrderApprovedPartOneEvent
): void {
  let entity = new OrderApprovedPartOne(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.hash = event.params.hash
  entity.exchange = event.params.exchange
  entity.maker = event.params.maker
  entity.taker = event.params.taker
  entity.makerRelayerFee = event.params.makerRelayerFee
  entity.takerRelayerFee = event.params.takerRelayerFee
  entity.makerProtocolFee = event.params.makerProtocolFee
  entity.takerProtocolFee = event.params.takerProtocolFee
  entity.feeRecipient = event.params.feeRecipient
  entity.feeMethod = event.params.feeMethod
  entity.side = event.params.side
  entity.saleKind = event.params.saleKind
  entity.target = event.params.target
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let ret = OrderApproved.load(event.transaction.hash)
  let order_entity: OrderApproved
  if (ret == null) {
    order_entity = new OrderApproved(event.transaction.hash)
  } else {
    order_entity = ret
  }
  order_entity.hash = event.params.hash
  order_entity.exchange = event.params.exchange
  order_entity.maker = event.params.maker
  order_entity.taker = event.params.taker
  order_entity.makerRelayerFee = event.params.makerRelayerFee
  order_entity.takerRelayerFee = event.params.takerRelayerFee
  order_entity.makerProtocolFee = event.params.makerProtocolFee
  order_entity.takerProtocolFee = event.params.takerProtocolFee
  order_entity.feeRecipient = event.params.feeRecipient
  order_entity.feeMethod = event.params.feeMethod
  order_entity.side = event.params.side
  order_entity.saleKind = event.params.saleKind
  order_entity.target = event.params.target
  order_entity.blockNumber = event.block.number
  order_entity.blockTimestamp = event.block.timestamp
  order_entity.transactionHash = event.transaction.hash

  order_entity.save()
}

//resolver that adds paramaters from orderapprovedparttwo into a single orderapproved entity
export function handleOrderApprovedPartTwo(
  event: OrderApprovedPartTwoEvent
): void {
  let entity = new OrderApprovedPartTwo(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.hash = event.params.hash
  entity.howToCall = event.params.howToCall
  entity.calldata = event.params.calldata
  entity.replacementPattern = event.params.replacementPattern
  entity.staticTarget = event.params.staticTarget
  entity.staticExtradata = event.params.staticExtradata
  entity.paymentToken = event.params.paymentToken
  entity.basePrice = event.params.basePrice
  entity.extra = event.params.extra
  entity.listingTime = event.params.listingTime
  entity.expirationTime = event.params.expirationTime
  entity.salt = event.params.salt
  entity.orderbookInclusionDesired = event.params.orderbookInclusionDesired
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let ret = OrderApproved.load(event.transaction.hash)
  let order_entity: OrderApproved
  if (ret == null) {
    order_entity = new OrderApproved(event.transaction.hash)
  } else {
    order_entity = ret
  }
  order_entity.hash = event.params.hash
  order_entity.howToCall = event.params.howToCall
  order_entity.calldata = event.params.calldata
  order_entity.replacementPattern = event.params.replacementPattern
  order_entity.staticTarget = event.params.staticTarget
  order_entity.staticExtradata = event.params.staticExtradata
  order_entity.paymentToken = event.params.paymentToken
  order_entity.basePrice = event.params.basePrice
  order_entity.extra = event.params.extra
  order_entity.listingTime = event.params.listingTime
  order_entity.expirationTime = event.params.expirationTime
  order_entity.salt = event.params.salt
  order_entity.orderbookInclusionDesired = event.params.orderbookInclusionDesired
  order_entity.blockNumber = event.block.number
  order_entity.blockTimestamp = event.block.timestamp
  order_entity.transactionHash = event.transaction.hash

  order_entity.save()
}

//resolver that uses ordersmatched to create account and NFT entities
export function handleOrdersMatched(event: OrdersMatchedEvent): void {
  let maker = event.params.maker
  let taker = event.params.taker

  let price = event.params.price
  
  let hash_sell = event.params.sellHash
  let hash_buy = event.params.buyHash

  let receipt = event.receipt

  //used the receipt logs to find collection address and token ID
  if(receipt) {

    let tokenid = BigInt.fromI32(0)
    let collection = Address.fromI32(0)

    //checks all logs because there can be multiple transfers in a single transaction
    for(let i = 0; i < receipt.logs.length; i++) {
      //checks in the log is a transfer
      if(receipt.logs[i].topics[0] == Bytes.fromHexString('ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')) {
        collection = receipt.logs[i].address
        if(receipt.logs[i].topics.length >= 4) {
          tokenid = ethereum.decode('uint256', receipt.logs[i].topics[3])!.toBigInt()
        }

        //creates or gets NFT based on current owner, tokenid and collection
        let NFT = getOrCreateNFT(tokenid, collection, maker)
        NFT.last_sale_price = price
        NFT.owner = taker

        //sets the NFT's last transation hash based on if it was a buy or a sell
        if(hash_sell != Bytes.fromHexString('0000000000000000000000000000000000000000000000000000000000000000')){
          NFT.last_transaction_hash = hash_sell
        }
        else {
          NFT.last_transaction_hash = hash_buy
        }

        NFT.save();
      }
    }
  }

  //creates accounts based on parameters from ordersmatched and popolates all entity fields
  let buyer = getOrCreateAccount(maker)
  let seller = getOrCreateAccount(taker)

  buyer.num_buys = buyer.num_buys.plus(BigInt.fromI32(1))
  seller.num_sells = seller.num_sells.plus(BigInt.fromI32(1))

  buyer.total_transactions = buyer.total_transactions.plus(BigInt.fromI32(1))
  seller.total_transactions = seller.total_transactions.plus(BigInt.fromI32(1))
  
  if(hash_sell != Bytes.fromHexString('0000000000000000000000000000000000000000000000000000000000000000')){
    buyer.most_recent_tranaction_hash = hash_sell
    seller.most_recent_tranaction_hash = hash_sell
  }
  else {
    buyer.most_recent_tranaction_hash = hash_buy
    seller.most_recent_tranaction_hash = hash_buy
  }

  buyer.save()
  seller.save()
}

//resolver for ordercancelled
export function handleOrderCancelled(event: OrderCancelledEvent): void {
  let entity = new OrderCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.hash = event.params.hash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

//resolver for ownershiprenouced
export function handleOwnershipRenounced(event: OwnershipRenouncedEvent): void {
  let entity = new OwnershipRenounced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

//resolver for ownershiptransferred
export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
