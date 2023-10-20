import { WarpTokenConfig } from '../features/tokens/types';

export const tokenList: WarpTokenConfig = [

  // // Example collateral token for an EVM chain
  // {
  //   type: 'collateral',
  //   chainId: 5,
  //   address: '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
  //   hypCollateralAddress: '0x145de8760021c4ac6676376691b78038d3DE9097',
  //   name: 'Weth',
  //   symbol: 'WETH',
  //   decimals: 18,
  //   logoURI: '/logos/weth.png', // See public/logos/
  // },

  // Example native token for an EVM chain
  {
    type: 'native',
    chainId: 11155111,
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
    hypNativeAddress: '0x1B16c398fcA874Cd7cc08b1BB84b51F83Ae571d6',
    logoURI: '/logos/weth.png',
  },
  {
    chainId: 11801,
    "name":"astria",
    "symbol":"RIA",
    "decimals":18,
    "type":"native",
    "hypNativeAddress":"0x1B16c398fcA874Cd7cc08b1BB84b51F83Ae571d6"
  },


  // // Example NFT (ERC721) token for an EVM chain
  // {
  //   chainId: 5,
  //   name: 'Test721',
  //   symbol: 'TEST721',
  //   decimals: 0,
  //   type: 'collateral',
  //   address: '0x77566D540d1E207dFf8DA205ed78750F9a1e7c55',
  //   hypCollateralAddress: '0xDcbc0faAA269Cf649AC8950838664BB7B355BD6B',
  //   isNft: true,
  // },
];
