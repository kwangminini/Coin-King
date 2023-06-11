'use client'

import CoinHeader from '@/components/CoinHeader'
import TradingChart from '@/components/TradingChart'
import TradingForm from '@/components/TradingForm'
import AsyncBoundary from '@/components/common/AsyncBoundary'
import { coinList, ICoin } from '@/constants/coinList'
import { useSearchParams, useRouter } from 'next/navigation'
import Skeleton from 'react-loading-skeleton'

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
      <AsyncBoundary SuspenseFallBack={<Skeleton count={1} height={350} />}>
        <TradingChart selectedCoin={selectedCoin} />
      </AsyncBoundary>
      <AsyncBoundary SuspenseFallBack={<Skeleton count={1} height={350} />}>
        <TradingForm selectedCoin={selectedCoin} />
      </AsyncBoundary>
    </section>
  )
}
