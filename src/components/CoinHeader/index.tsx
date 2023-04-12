'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { coinList, ICoin } from '@/constants/coinList'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

export default function CoinHeader() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const coinId = searchParams?.get('coin')
  const [curCoin, setCurCoin] = useState<ICoin | null>(null)

  useEffect(() => {
    if (coinId) {
      const _curCoin = coinList.filter((coin) => coin.id === coinId)[0]
      setCurCoin(_curCoin)
    } else {
      //searchParam 없을 시 coin=btc로 리다이렉트
      router.push('/investing?coin=btc')
    }
  }, [coinId, router])
  return (
    <header className="flex h-50 items-center">
      <strong className="text-[20px] font-bold text-main-font-color">
        {curCoin?.name ? curCoin?.name : <Skeleton width={70} count={1} />}
      </strong>
      <p className="pl-2 text-sub-font-color text-xs">
        {curCoin?.unit ? curCoin?.unit : <Skeleton width={50} count={1} />}
      </p>
    </header>
  )
}
