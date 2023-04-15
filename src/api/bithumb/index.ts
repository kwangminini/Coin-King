import { bithumbAPI } from '@/api/axiosInstance'

/**
 * 코인 시세 조회
 * @returns 코인 리스트
 */
export const getCandles = async (coinId: string, interval: string) => {
  try {
    const response = await bithumbAPI.get(`${coinId}_KRW/${interval}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
