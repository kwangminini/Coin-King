'use client'

import CoinHeader from '@/components/CoinHeader'
import TradingChart from '@/components/TradingChart'
import TradingForm from '@/components/TradingForm'
import AsyncBoundary from '@/components/common/AsyncBoundary'
import { coinList, ICoin } from '@/constants/coinList'
import { useSearchParams, useRouter } from 'next/navigation'

export default function Investing() {
  const searchParams = useSearchParams()
  const coinId = searchParams?.get('coin')
  const router = useRouter()
  const selectedCoin: ICoin = coinList.filter((coin) => coin.id === coinId)[0]

  if (!selectedCoin) {
    return router.push('/investing?coin=btc')
  }
  return (
    <section className="flex h-full px-100 flex-col">
      <CoinHeader selectedCoin={selectedCoin} />
      <AsyncBoundary>
        <TradingChart selectedCoin={selectedCoin} />
      </AsyncBoundary>
      <TradingForm selectedCoin={selectedCoin} />
    </section>
  )
}
