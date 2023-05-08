const { request } = require('graphql-request');
import { url, block_n, approved_parts_query, approved_orders_query } from "./constants.js";

describe('Test Approved Parts', () => {
    it('Returns the first five approved parts ones and twos', async () => {
        const variables = {first: 5, block_n: block_n};
        const data = await request(url, approved_parts_query, variables);
        expect(data).toEqual({
          "orderApprovedPartOnes": [
            {
              "id": "0x00011bc0dddb14cde65d4de8b4b9338f252168efb0c7fe03ba940d10b7c390882f000000",
              "hash": "0x1abcb42165a0abf4b7b5f708e097396a746478a6d11cc93731946007c436f283",
              "exchange": "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
              "maker": "0x89839e4bf3e424c47782c7e78c4421579198da9f"
            },
            {
              "id": "0x000b06bbef7093842526c0ccd1e9219fae8f6940561611ad9097184a4a84e2f718000000",
              "hash": "0x290378d1389bba66b16fedffadc26ee08b80d981490f7e1187e96b2b31324d68",
              "exchange": "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
              "maker": "0xd5be42470770c282109357515c0dbb396252be97"
            },
            {
              "id": "0x000c4175c19486290b855c7dd664930e673658963cb42af89f2113a9910f1a472b000000",
              "hash": "0xbbe4f83e2d5c063db3c1ec8e51977265dc060b4ea01d750629324968473ad686",
              "exchange": "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
              "maker": "0x7c6b920a19ac5e4aad70b8d9f2f50b09a13a2e62"
            },
            {
              "id": "0x0011f19d1e461333eaa65d3a56b18c08adaa26ae644a150ad9ae6ed76f00d76831000000",
              "hash": "0xc8701fe1f818bbeb07c9364d683119988955e6f41b866f217a8e845a3c965e00",
              "exchange": "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
              "maker": "0x748044889b60230f7b27039893b6805a8686b286"
            },
            {
              "id": "0x005887d2602c19bf64757cad9b062749e00eb8b2df21dfe3b96786f89292c0e24c000000",
              "hash": "0xb047b2d37b32b3e9e3a4e1c64668f80a1d1e60f98ba94d57ecdcc31846576b58",
              "exchange": "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
              "maker": "0x7c6b920a19ac5e4aad70b8d9f2f50b09a13a2e62"
            }
          ],
          "orderApprovedPartTwos": [
            {
              "id": "0x00011bc0dddb14cde65d4de8b4b9338f252168efb0c7fe03ba940d10b7c3908830000000",
              "hash": "0x1abcb42165a0abf4b7b5f708e097396a746478a6d11cc93731946007c436f283",
              "howToCall": 0,
              "calldata": "0x23b872dd00000000000000000000000089839e4bf3e424c47782c7e78c4421579198da9f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000179214"
            },
            {
              "id": "0x000b06bbef7093842526c0ccd1e9219fae8f6940561611ad9097184a4a84e2f719000000",
              "hash": "0x290378d1389bba66b16fedffadc26ee08b80d981490f7e1187e96b2b31324d68",
              "howToCall": 0,
              "calldata": "0x23b872dd000000000000000000000000d5be42470770c282109357515c0dbb396252be97000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000095f4"
            },
            {
              "id": "0x000c4175c19486290b855c7dd664930e673658963cb42af89f2113a9910f1a472c000000",
              "hash": "0xbbe4f83e2d5c063db3c1ec8e51977265dc060b4ea01d750629324968473ad686",
              "howToCall": 0,
              "calldata": "0x23b872dd00000000000000000000000000000000000000000000000000000000000000000000000000000000000000007c6b920a19ac5e4aad70b8d9f2f50b09a13a2e62000000000000000000000000000000000000000000000000000000000131f333"
            },
            {
              "id": "0x0011f19d1e461333eaa65d3a56b18c08adaa26ae644a150ad9ae6ed76f00d76832000000",
              "hash": "0xc8701fe1f818bbeb07c9364d683119988955e6f41b866f217a8e845a3c965e00",
              "howToCall": 0,
              "calldata": "0x23b872dd000000000000000000000000748044889b60230f7b27039893b6805a8686b2860000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000036e"
            },
            {
              "id": "0x005887d2602c19bf64757cad9b062749e00eb8b2df21dfe3b96786f89292c0e24d000000",
              "hash": "0xb047b2d37b32b3e9e3a4e1c64668f80a1d1e60f98ba94d57ecdcc31846576b58",
              "howToCall": 0,
              "calldata": "0x23b872dd00000000000000000000000000000000000000000000000000000000000000000000000000000000000000007c6b920a19ac5e4aad70b8d9f2f50b09a13a2e62000000000000000000000000000000000000000000000000000000000133ec6d"
            }
          ]
        });
    });
});

describe('Test Approved Orders', () => {
    it('Returns the first five approved orders', async () => {
        const variables = {first: 5, block_n: block_n};
        const data = await request(url, approved_orders_query, variables);
        expect(data).toEqual({
          "orderApproveds": [
            {
              "id": "0x00011bc0dddb14cde65d4de8b4b9338f252168efb0c7fe03ba940d10b7c39088",
              "hash": "0x1abcb42165a0abf4b7b5f708e097396a746478a6d11cc93731946007c436f283",
              "exchange": "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
              "maker": "0x89839e4bf3e424c47782c7e78c4421579198da9f",
              "taker": "0x0000000000000000000000000000000000000000",
              "makerRelayerFee": "0",
              "takerRelayerFee": "0",
              "makerProtocolFee": "0",
              "takerProtocolFee": "0",
              "feeRecipient": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
              "feeMethod": 1,
              "side": 1,
              "saleKind": 0,
              "target": "0x06012c8cf97bead5deae237070f9587f8e7a266d",
              "blockNumber": "7681088",
              "blockTimestamp": "1556793113",
              "transactionHash": "0x00011bc0dddb14cde65d4de8b4b9338f252168efb0c7fe03ba940d10b7c39088",
              "howToCall": 0,
              "calldata": "0x23b872dd00000000000000000000000089839e4bf3e424c47782c7e78c4421579198da9f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000179214",
              "replacementPattern": "0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000",
              "staticTarget": "0x0000000000000000000000000000000000000000",
              "staticExtradata": "0x",
              "paymentToken": "0x0000000000000000000000000000000000000000",
              "basePrice": "100000000000000000",
              "extra": "0",
              "listingTime": "1556792917",
              "expirationTime": "0",
              "salt": "87473282216214649009969978408898702889022073349397410624179223978535067881282",
              "orderbookInclusionDesired": true
            },
            {
              "id": "0x000b06bbef7093842526c0ccd1e9219fae8f6940561611ad9097184a4a84e2f7",
              "hash": "0x290378d1389bba66b16fedffadc26ee08b80d981490f7e1187e96b2b31324d68",
              "exchange": "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
              "maker": "0xd5be42470770c282109357515c0dbb396252be97",
              "taker": "0x0000000000000000000000000000000000000000",
              "makerRelayerFee": "500",
              "takerRelayerFee": "0",
              "makerProtocolFee": "0",
              "takerProtocolFee": "0",
              "feeRecipient": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
              "feeMethod": 1,
              "side": 1,
              "saleKind": 0,
              "target": "0x157ad40f43e26e72909f16bb07f2ca97466df849",
              "blockNumber": "7882756",
              "blockTimestamp": "1559514309",
              "transactionHash": "0x000b06bbef7093842526c0ccd1e9219fae8f6940561611ad9097184a4a84e2f7",
              "howToCall": 0,
              "calldata": "0x23b872dd000000000000000000000000d5be42470770c282109357515c0dbb396252be97000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000095f4",
              "replacementPattern": "0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000",
              "staticTarget": "0x0000000000000000000000000000000000000000",
              "staticExtradata": "0x",
              "paymentToken": "0x0000000000000000000000000000000000000000",
              "basePrice": "34000000000000000",
              "extra": "0",
              "listingTime": "1559514206",
              "expirationTime": "0",
              "salt": "75387530757136359165065710644684230042214669959322805824081463757999641740671",
              "orderbookInclusionDesired": true
            },
            {
              "id": "0x000c4175c19486290b855c7dd664930e673658963cb42af89f2113a9910f1a47",
              "hash": "0xbbe4f83e2d5c063db3c1ec8e51977265dc060b4ea01d750629324968473ad686",
              "exchange": "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
              "maker": "0x7c6b920a19ac5e4aad70b8d9f2f50b09a13a2e62",
              "taker": "0x0000000000000000000000000000000000000000",
              "makerRelayerFee": "0",
              "takerRelayerFee": "1000",
              "makerProtocolFee": "0",
              "takerProtocolFee": "0",
              "feeRecipient": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
              "feeMethod": 1,
              "side": 0,
              "saleKind": 0,
              "target": "0x273f7f8e6489682df756151f5525576e322d51a3",
              "blockNumber": "7809052",
              "blockTimestamp": "1558520690",
              "transactionHash": "0x000c4175c19486290b855c7dd664930e673658963cb42af89f2113a9910f1a47",
              "howToCall": 0,
              "calldata": "0x23b872dd00000000000000000000000000000000000000000000000000000000000000000000000000000000000000007c6b920a19ac5e4aad70b8d9f2f50b09a13a2e62000000000000000000000000000000000000000000000000000000000131f333",
              "replacementPattern": "0x00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
              "staticTarget": "0x0000000000000000000000000000000000000000",
              "staticExtradata": "0x",
              "paymentToken": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
              "basePrice": "125000000000000000",
              "extra": "0",
              "listingTime": "1558520521",
              "expirationTime": "1558779818",
              "salt": "92405084108996164263219216903083432963012020871381358578042298912603264801514",
              "orderbookInclusionDesired": true
            },
            {
              "id": "0x0011f19d1e461333eaa65d3a56b18c08adaa26ae644a150ad9ae6ed76f00d768",
              "hash": "0xc8701fe1f818bbeb07c9364d683119988955e6f41b866f217a8e845a3c965e00",
              "exchange": "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
              "maker": "0x748044889b60230f7b27039893b6805a8686b286",
              "taker": "0x0000000000000000000000000000000000000000",
              "makerRelayerFee": "500",
              "takerRelayerFee": "0",
              "makerProtocolFee": "0",
              "takerProtocolFee": "0",
              "feeRecipient": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
              "feeMethod": 1,
              "side": 1,
              "saleKind": 0,
              "target": "0x2f2d5aa0efdb9ca3c9bb789693d06bebea88792f",
              "blockNumber": "7840542",
              "blockTimestamp": "1558944709",
              "transactionHash": "0x0011f19d1e461333eaa65d3a56b18c08adaa26ae644a150ad9ae6ed76f00d768",
              "howToCall": 0,
              "calldata": "0x23b872dd000000000000000000000000748044889b60230f7b27039893b6805a8686b2860000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000036e",
              "replacementPattern": "0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000",
              "staticTarget": "0x0000000000000000000000000000000000000000",
              "staticExtradata": "0x",
              "paymentToken": "0x0000000000000000000000000000000000000000",
              "basePrice": "35000000000000000",
              "extra": "0",
              "listingTime": "1558944599",
              "expirationTime": "0",
              "salt": "6468109021668279697175412500873782292804056385199934702123721946297948520252",
              "orderbookInclusionDesired": true
            },
            {
              "id": "0x005887d2602c19bf64757cad9b062749e00eb8b2df21dfe3b96786f89292c0e2",
              "hash": "0xb047b2d37b32b3e9e3a4e1c64668f80a1d1e60f98ba94d57ecdcc31846576b58",
              "exchange": "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
              "maker": "0x7c6b920a19ac5e4aad70b8d9f2f50b09a13a2e62",
              "taker": "0x0000000000000000000000000000000000000000",
              "makerRelayerFee": "0",
              "takerRelayerFee": "1000",
              "makerProtocolFee": "0",
              "takerProtocolFee": "0",
              "feeRecipient": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
              "feeMethod": 1,
              "side": 0,
              "saleKind": 0,
              "target": "0x273f7f8e6489682df756151f5525576e322d51a3",
              "blockNumber": "7808792",
              "blockTimestamp": "1558516898",
              "transactionHash": "0x005887d2602c19bf64757cad9b062749e00eb8b2df21dfe3b96786f89292c0e2",
              "howToCall": 0,
              "calldata": "0x23b872dd00000000000000000000000000000000000000000000000000000000000000000000000000000000000000007c6b920a19ac5e4aad70b8d9f2f50b09a13a2e62000000000000000000000000000000000000000000000000000000000133ec6d",
              "replacementPattern": "0x00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
              "staticTarget": "0x0000000000000000000000000000000000000000",
              "staticExtradata": "0x",
              "paymentToken": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
              "basePrice": "150000000000000000",
              "extra": "0",
              "listingTime": "1558516807",
              "expirationTime": "1558776105",
              "salt": "94222363395028354368025392063608021800167222199054280170405942100495707629367",
              "orderbookInclusionDesired": true
            }
          ]
        });
    });
});
