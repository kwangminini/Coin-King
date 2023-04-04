export interface ICoins {
  icon: string
  name: string
  unit: string
}

export const coins: ICoins[] = [
  {
    icon: '/btc.svg',
    name: '비트코인',
    unit: 'BTC/KRW',
  },
  {
    icon: '/eth.svg',
    name: '이더리움',
    unit: 'ETH/KRW',
  },
  {
    icon: '/xrp.svg',
    name: '리플',
    unit: 'XRP/KRW',
  },
]
