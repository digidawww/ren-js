import { AbiItem } from "web3-utils";
import zZEC from "darknode-sol/build/localnet/zZEC.json";
import ZECShifter from "darknode-sol/build/localnet/ZECShifter.json";
import zBTC from "darknode-sol/build/localnet/zBTC.json";
import ShifterRegistry from "darknode-sol/build/localnet/ShifterRegistry.json";
import RenToken from "darknode-sol/build/localnet/RenToken.json";
import DarknodeSlasher from "darknode-sol/build/localnet/DarknodeSlasher.json";
import DarknodeRegistryStore from "darknode-sol/build/localnet/DarknodeRegistryStore.json";
import DarknodeRegistry from "darknode-sol/build/localnet/DarknodeRegistry.json";
import DarknodePaymentStore from "darknode-sol/build/localnet/DarknodePaymentStore.json";
import DarknodePayment from "darknode-sol/build/localnet/DarknodePayment.json";
import BTCShifter from "darknode-sol/build/localnet/BTCShifter.json";
import ERC20 from "darknode-sol/build/erc/ERC20.json";

import { Network } from "./network";

export default Network({
    name: "localnet",
    chain: "kovan",
    label: "Localnet",
    chainLabel: "Kovan",
    infura: "https://kovan.infura.io",
    etherscan: "https://kovan.etherscan.io",
    renVM: {
        mpkh: "0x0c0b293a30e5398533783f344c296f57d78e4cbc",
        mintAuthority: "0x04084f1cACCB87Dcab9a29a084281294dA96Bf44",
    },
    addresses: {
        ren: {
            DarknodeSlasher: {
                address: DarknodeSlasher.networks[42].address,
                abi: DarknodeSlasher.abi as AbiItem[],
            },
            DarknodeRegistry: {
                address: DarknodeRegistry.networks[42].address,
                abi: DarknodeRegistry.abi as AbiItem[],
                block: 11974083
            },
            DarknodeRegistryStore: {
                address: DarknodeRegistryStore.networks[42].address,
                abi: DarknodeRegistryStore.abi as AbiItem[],
            },
            DarknodePayment: {
                address: DarknodePayment.networks[42].address,
                abi: DarknodePayment.abi as AbiItem[],
            },
            DarknodePaymentStore: {
                address: DarknodePaymentStore.networks[42].address,
                abi: DarknodePaymentStore.abi as AbiItem[],
            }
        },
        shifter: {
            BTCShifter: {
                address: BTCShifter.networks[42].address,
                abi: BTCShifter.abi as AbiItem[],
            },
            ZECShifter: {
                address: ZECShifter.networks[42].address,
                abi: ZECShifter.abi as AbiItem[],
            },
            zBTC: {
                address: zBTC.networks[42].address,
                abi: zBTC.abi as AbiItem[],
            },
            zZEC: {
                address: zZEC.networks[42].address,
                abi: zZEC.abi as AbiItem[],
            },
            ShifterRegistry: {
                address: ShifterRegistry.networks[42].address,
                abi: ShifterRegistry.abi as AbiItem[],
            }
        },
        tokens: {
            DAI: {
                address: "0xc4375b7de8af5a38a93548eb8453a498222c4ff2",
                decimals: 18
            },
            BTC: {
                address: zBTC.networks[42].address,
                abi: zBTC.abi as AbiItem[],
                decimals: 8
            },
            ZEC: {
                address: zZEC.networks[42].address,
                abi: zZEC.abi as AbiItem[],
                decimals: 8
            },
            REN: {
                address: RenToken.networks[42].address,
                abi: RenToken.abi as AbiItem[],
                decimals: 18
            },
            ETH: {
                address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                decimals: 18
            }
        },
        erc: {
            ERC20: {
                abi: ERC20.abi as AbiItem[],
            }
        }
    }
});