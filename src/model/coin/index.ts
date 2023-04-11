export interface ICoin {
  id: string
  icon: string
  darkIcon: string
  name: string
  unit: string
}

export const coinList: ICoin[] = [
  {
    id: 'btc',
    icon: '/btc.svg',
    darkIcon: '/btc.svg',
    name: '비트코인',
    unit: 'BTC/KRW',
  },
  {
    id: 'eth',
    icon: '/eth.svg',
    darkIcon: '/eth_dark.svg',
    name: '이더리움',
    unit: 'ETH/KRW',
  },
  {
    id: 'xrp',
    icon: '/xrp.svg',
    darkIcon: '/xrp_dark.svg',
    name: '리플',
    unit: 'XRP/KRW',
  },
]
