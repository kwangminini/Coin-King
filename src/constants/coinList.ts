import { CoinId } from '@/atoms/coinsAtom'

export interface ICoin {
  id: CoinId
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
    id: 'etc',
    icon: '/etc.svg',
    darkIcon: '/etc.svg',
    name: '이더리움클래식',
    unit: 'ETC/KRW',
    codes: 'KRW-ETC',
  },
  {
    id: 'xrp',
    icon: '/xrp.svg',
    darkIcon: '/xrp_dark.svg',
    name: '리플',
    unit: 'XRP/KRW',
    codes: 'KRW-XRP',
  },
  {
    id: 'ada',
    icon: '/ada.svg',
    darkIcon: '/ada.svg',
    name: '에이다',
    unit: 'ADA/KRW',
    codes: 'KRW-ADA',
  },
  {
    id: 'doge',
    icon: '/doge.svg',
    darkIcon: '/doge.svg',
    name: '도지코인',
    unit: 'DOGE/KRW',
    codes: 'KRW-DOGE',
  },
]
