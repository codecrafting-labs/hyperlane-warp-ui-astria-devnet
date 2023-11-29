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

  cclabs01: {
    name: 'cclabs01',
    displayName: 'CCLabs 01',
    protocol: ProtocolType.Ethereum,
    chainId: 11801,
    nativeToken: {
      name: 'Code1',
      symbol: 'CDE1',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'https://executor.cclabs01.k8s.cclabs.tech',
      },
    ],
    mailbox: "0xc6c3dC01B9cB78aB2B7d9846e0491AEC7DbCE7C1",
  },
  cclabs02: {
    name: 'cclabs02',
    displayName: 'CCLabs 02',
    protocol: ProtocolType.Ethereum,
    chainId: 11802,
    nativeToken: {
      name: 'Code2',
      symbol: 'CDE2',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'https://executor.cclabs02.k8s.cclabs.tech',
      },
    ],
    mailbox: "0xc6c3dC01B9cB78aB2B7d9846e0491AEC7DbCE7C1",
  },
  sepolia: {
    ...chainMetadata.sepolia,
    rpcUrls: [
      {
        http: 'https://nd-950-422-262.p2pify.com/3ead640b1f1e7b471894eb32c3e8d95c',
      },
    ],
  },
  cosmoshub: {
    protocol: ProtocolType.Cosmos,
    name: 'cosmoshub',
    chainId: 'cosmoshub-4',
    displayName: 'Cosmos Hub',
    domainId: 1234, // TODO
    bech32Prefix: 'cosmos',
    slip44: 118,
    rpcUrls: [
      { http: 'https://rpc-cosmoshub.blockapsis.com' },
      { http: 'https://lcd-cosmoshub.blockapsis.com' },
    ],
    nativeToken: {
      name: 'Atom',
      symbol: 'ATOM',
      decimals: 6,
    },
    logoURI: '/logos/cosmos.svg',
  },
};
