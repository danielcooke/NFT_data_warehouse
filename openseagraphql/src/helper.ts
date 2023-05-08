import { Address, BigInt, Bytes } from '@graphprotocol/graph-ts'
import { Account, NFT } from '../generated/schema'

//function that creates or retrevies an account that has traded an NFT on opensea
export function getOrCreateAccount(account_address: Address): Account {
	let account = Account.load(account_address)

	if (!account) {
		account = new Account(account_address)
		account.num_buys = BigInt.fromI32(0)
		account.num_sells = BigInt.fromI32(0)
		account.total_transactions = BigInt.fromI32(0)
		account.save()
	}

	return account as Account
}

//function to create an NFT based on the collection and token ID from the transfer topics of the ordermatched event
export function getOrCreateNFT(tokenID: BigInt, Collection: Bytes, Owner: Address): NFT {
	let nft = NFT.load(Collection.toHexString().concat('-').concat(tokenID.toHexString()))

	if(!nft) {
		nft = new NFT(Collection.toHexString().concat('-').concat(tokenID.toHexString()))
		nft.tokenID = tokenID
		nft.collection = Collection
		nft.owner = Owner
	}
	
	return nft
}