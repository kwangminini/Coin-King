'use client'

import { useGetDayCandles } from '@/hooks/queries/upbit'
import { useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { createChart } from 'lightweight-charts'
import { ICoin } from '@/constants/coinList'
import { getDayCandlestickData } from '@/utils/coinUtil/getDayCandlestickData'

export default function TradingChart({
  selectedCoin,
}: {
  selectedCoin: ICoin
}) {
  const { data, isLoading, isSuccess } = useGetDayCandles(selectedCoin.codes!)
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isSuccess && chartRef.current) {
      initChartElement(chartRef.current)
      const chart = createChart(chartRef.current)
      const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
      })
      candlestickSeries.setData(getDayCandlestickData(data))
    }
  }, [data, isSuccess])

  const initChartElement = (chartElement: HTMLElement) => {
    //이미 만들어진 차트가 있다면 삭제
    if (chartElement.childElementCount > 0) {
      removeAllChildElements(chartElement)
    }

    function removeAllChildElements(parentElement: HTMLElement) {
      const childElements = parentElement.childNodes

      for (let i = 0; i < childElements.length; i++) {
        parentElement.removeChild(childElements[i])
      }
    }
  }

  if (isLoading) {
    return <Skeleton count={1} height={350} />
  }

  return (
    <div
      id="chart"
      className="h-350 border-gray-200 border w-full"
      ref={chartRef}
    />
  )
}
