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
import { useTheme } from 'next-themes'

export default function TradingChart({
  selectedCoin,
}: {
  selectedCoin: ICoin
}) {
  const { data, isLoading, isSuccess } = useGetDayCandles(selectedCoin.codes!)
  const { coinState } = useGetCoinState(selectedCoin.id)
  const chartRef = useRef<HTMLDivElement>(null)
  const candlestickRef = useRef<ISeriesApi<'Candlestick'>>()
  const { theme } = useTheme()

  useEffect(() => {
    if (isSuccess && chartRef.current) {
      initChartElement(chartRef.current)
      drawChart(chartRef.current, data, theme)
      console.log('theme :::', theme)
    }
  }, [data, isSuccess, theme])

  useEffect(() => {
    updateChart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coinState])

  const drawChart = (
    container: HTMLDivElement,
    data: IDayCandles[],
    theme?: string
  ) => {
    const chart = createChart(container, chartOption)
    candlestickRef.current = chart.addCandlestickSeries(candlestickOption)
    candlestickRef.current.setData(getDayCandlestickData(data))
    window.addEventListener('resize', () => {
      chart.resize(container.clientWidth, container.clientHeight)
    })
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

  const getThemeColor = (theme?: string, customColor?: string) => {
    if (customColor) {
      return theme === 'dark' ? customColor : undefined
    }
    return theme === 'dark' ? 'black' : 'white'
  }

  const chartOption = {
    width: 1000,
    layout: {
      background: { color: getThemeColor(theme) },
      textColor: getThemeColor(theme, '#DDD'),
    },
    grid: {
      vertLines: { color: getThemeColor(theme, '#444') },
      horzLines: { color: getThemeColor(theme, '#444') },
    },
  }

  const candlestickOption = {
    upColor: increaseColor,
    wickUpColor: increaseColor,
    downColor: decreaseColor,
    wickDownColor: decreaseColor,
    borderVisible: false,
  }

  if (isLoading) {
    return <Skeleton count={1} height={350} />
  }

  return <div id="chart" className="h-350" ref={chartRef} />
}
