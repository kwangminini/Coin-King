import { UseQueryResult, useQuery } from 'react-query'
import { getDayCandles } from '@/api/upbit'
import { AxiosError } from 'axios'
import { IDayCandles } from '@/types/upbit/candles'

const prefix = 'upbit/'

//useQuery Key
const useQueryKey = {
  GET_DAY_CANDLES: prefix + 'getDayCandles',
}

//custom hook
export const useGetDayCandles = (
  coinCodes: string
): UseQueryResult<IDayCandles[], AxiosError> => {
  return useQuery([useQueryKey.GET_DAY_CANDLES, coinCodes], () =>
    getDayCandles(coinCodes)
  )
}
