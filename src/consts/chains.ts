import { ChainMap, ChainMetadata, chainMetadata } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';

// A map of chain names to ChainMetadata
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  // ----------- Add your chains here -----------------
  // Chains already in the SDK need not be included here. Example custom chain:
  // mycustomchain: {
  //   protocol: ProtocolType.Ethereum,
  //   chainId: 1234,
  //   domainId: 1234,
  //   name: 'mycustomchain',
  //   displayName: 'My Chain',
  //   nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  //   publicRpcUrls: [{ http: 'https://mycustomchain-rpc.com' }],
  //   blockExplorers: [
  //     {
  //       name: 'MyCustomScan',
  //       url: 'https://mycustomchain-scan.com',
  //       apiUrl: 'https://api.mycustomchain-scan.com/api',
  //       family: ExplorerFamily.Etherscan,
  //     },
  //   ],
  //   blocks: {
  //     confirmations: 1,
  //     reorgPeriod: 1,
  //     estimateBlockTime: 10,
  //   },
  //   logoURI: '/logo.svg',
  // },

  rollup01: {
    name: 'rollup01',
    displayName: 'CCLabs 01',
    protocol: ProtocolType.Ethereum,
    chainId: 11801,
    nativeToken: {
      name: 'astria',
      symbol: 'RIA',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'https://executor.rollup01.k8s.cclabs.tech',
      },
    ],
    mailbox: "0x81cC6E0eb0Ca4399700909DBE5Ec8c29081b3Cf1",
  },
  rollup02: {
    name: 'rollup02',
    displayName: 'CCLabs 02',
    protocol: ProtocolType.Ethereum,
    chainId: 11802,
    nativeToken: {
      name: 'astria',
      symbol: 'RIA',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'https://executor.rollup02.k8s.cclabs.tech',
      },
    ],
    mailbox: "0x807C6990F7D21636C678E58c5Aa7518Eb203CBaf",
  },
  sepolia: {
    ...chainMetadata.sepolia,
    rpcUrls: [
      {
        http: 'https://nd-950-422-262.p2pify.com/3ead640b1f1e7b471894eb32c3e8d95c',
      },
    ],
  },
};
