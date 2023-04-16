'use client'

import { useGetDayCandles } from '@/queries/upbit'
import { useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { ISeriesApi, createChart } from 'lightweight-charts'
import { ICoin } from '@/constants/coinList'
import { getDayCandlestickData } from '@/utils/coinUtil/getDayCandlestickData'
import { IDayCandles } from '@/types/upbit/candles'
import { decreaseColor, increaseColor } from '@/constants/color'
import useGetCoinState from '@/hooks/useGetCoinState'
import { formatToYyyyMmDd } from '@/utils/dateUtil/formatToYyyyMmDd'
import { ICoinState } from '@/atoms/coinsAtom'

export default function TradingChart({
  selectedCoin,
}: {
  selectedCoin: ICoin
}) {
  const { data, isLoading, isSuccess } = useGetDayCandles(selectedCoin.codes!)
  const { coinState } = useGetCoinState(selectedCoin.id)
  const chartRef = useRef<HTMLDivElement>(null)
  const candlestickRef = useRef<ISeriesApi<'Candlestick'>>()
  useEffect(() => {
    if (isSuccess && chartRef.current) {
      initChartElement(chartRef.current)
      drawChart(chartRef.current, data)
    }
  }, [data, isSuccess])

  useEffect(() => {
    updateChart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coinState])

  const drawChart = (container: HTMLDivElement, data: IDayCandles[]) => {
    const chart = createChart(container, { width: 600 })
    candlestickRef.current = chart.addCandlestickSeries({
      upColor: increaseColor,
      downColor: decreaseColor,
      borderVisible: false,
    })
    candlestickRef.current.setData(getDayCandlestickData(data))
  }

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

  const updateChart = () => {
    if (candlestickRef.current) {
      candlestickRef.current.update(getRealtimeCandlestickData(coinState))
    }
  }

  const getRealtimeCandlestickData = (coinState: ICoinState) => {
    return {
      time: formatToYyyyMmDd(String(new Date())),
      open: coinState.op,
      high: coinState.hp,
      low: coinState.lp,
      close: coinState.tp,
    }
  }
  if (isLoading) {
    return <Skeleton count={1} height={350} />
  }

  return <div id="chart" className="h-350" ref={chartRef} />
}
