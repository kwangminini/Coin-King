import { UseQueryResult, useQuery } from 'react-query'
import { getCandles } from '@/api/bithumb'
import { AxiosError } from 'axios'
import { ICandles } from '@/types/bithumb/candles'

const prefix = 'bithumb/'

//useQuery Key
const useQueryKey = {
  GET_CANDLES: prefix + 'getCandles',
}

//custom hook
export const useGetCandles = (
  coinId: string,
  interval: string
): UseQueryResult<ICandles, AxiosError> => {
  return useQuery([useQueryKey.GET_CANDLES, coinId, interval], () =>
    getCandles(coinId, interval)
  )
}
