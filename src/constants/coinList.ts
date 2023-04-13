export interface ICoin {
  id: string
  icon: string
  darkIcon: string
  name: string
  unit: string
  codes?: string
}

export const coinList: ICoin[] = [
  {
    id: 'btc',
    icon: '/btc.svg',
    darkIcon: '/btc.svg',
    name: '비트코인',
    unit: 'BTC/KRW',
    codes: 'KRW-BTC',
  },
  {
    id: 'eth',
    icon: '/eth.svg',
    darkIcon: '/eth_dark.svg',
    name: '이더리움',
    unit: 'ETH/KRW',
    codes: 'KRW-ETH',
  },
  {
    id: 'xrp',
    icon: '/xrp.svg',
    darkIcon: '/xrp_dark.svg',
    name: '리플',
    unit: 'XRP/KRW',
    codes: 'KRW-XRP',
  },
]
