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

/**
 * 코인 현재 시세 조회
 * @param coinCodes 코인 코드 (ex KRW-BTC)
 * @returns 코인 현재 시세
 */
export const getCoinTicker = async (coinCodes: string) => {
  try {
    const response = await upbitAPI.get(`ticker?markets=${coinCodes}`)
    return response.data[0]
  } catch (error) {
    console.log(error)
  }
}
