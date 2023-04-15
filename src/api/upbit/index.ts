import { upbitAPI } from '@/api/axiosInstance'

/**
 * 코인 시세 일봉 조회
 * @returns 코인 리스트
 */
export const getDayCandles = async (coinCodes: string) => {
  try {
    const response = await upbitAPI.get('candles/days', {
      params: { market: coinCodes, count: 200, convertingPriceUnit: 'KRW' },
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
