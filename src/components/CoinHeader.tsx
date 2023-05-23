import { ICoin } from '@/constants/coinList'

export default function CoinHeader({ selectedCoin }: { selectedCoin: ICoin }) {
  return (
    <header className="flex h-50 items-center">
      <strong className="text-20 font-bold text-main-font-color dark:text-white">
        {selectedCoin.name}
      </strong>
      <p className="pl-2 text-sub-font-color text-xs dark:text-white">
        {selectedCoin.unit}
      </p>
    </header>
  )
}
