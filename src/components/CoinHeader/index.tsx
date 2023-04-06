'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { coinInfo, ICoin } from '@/model/coin'
import { useEffect, useState } from 'react'
export default function CoinHeader() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const coinId = searchParams.get('coin')
  const [curCoinInfo, setCurCoinInfo] = useState<ICoin | null>(null)

  useEffect(() => {
    if (coinId) {
      const _curCoinInfo = coinInfo.filter((coin) => coin.id === coinId)[0]
      setCurCoinInfo(_curCoinInfo)
    } else {
      //searchParam 없을 시 coin=btc로 리다이렉트
      router.push('/investing?coin=btc')
    }
  }, [coinId, router])
  return (
    <header className="flex h-[50px] items-center">
      <strong className="text-[20px] font-bold text-main-font-color">
        {curCoinInfo?.name}
      </strong>
      <p className="pl-2 text-sub-font-color text-xs">{curCoinInfo?.unit}</p>
    </header>
  )
}
