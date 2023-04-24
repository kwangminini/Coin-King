import { UseQueryResult, useQuery } from 'react-query'
import { getCoinTicker, getDayCandles } from '@/api/upbit'
import { AxiosError } from 'axios'
import { IDayCandles } from '@/types/upbit/candles'
import { ICoinTicker } from '@/types/upbit/coin'

const prefix = 'upbit/'

//useQuery Key
const useQueryKey = {
  GET_DAY_CANDLES: prefix + 'getDayCandles',
  GET_COIN_TICKER: prefix + 'getCoinTicker',
}

//custom hook
export const useGetDayCandles = (
  coinCodes: string
): UseQueryResult<IDayCandles[], AxiosError> => {
  return useQuery([useQueryKey.GET_DAY_CANDLES, coinCodes], () =>
    getDayCandles(coinCodes)
  )
}

export const useGetCoinTicker = (
  coinCodes: string
): UseQueryResult<ICoinTicker, AxiosError> => {
  return useQuery([useQueryKey.GET_COIN_TICKER, coinCodes], () =>
    getCoinTicker(coinCodes)
  )
}
