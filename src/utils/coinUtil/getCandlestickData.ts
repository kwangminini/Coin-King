import cloneDeep from 'lodash/cloneDeep'
import { formatToYyyyMmDd } from '@/utils/dateUtil'
import { ICandlesData } from '@/types/bithumb/candles'
/**
 * 빗썸 일봉 차트에 필요한 데이터로 가공해주는 함수
 * @param {ICandlesData} candlesArr
 * @returns
 */
export function getCandlestickData(candlesArr: ICandlesData[]) {
  const _candlesArr = cloneDeep(candlesArr)
  const result = _candlesArr.map((dayCandlesItem) => {
    return {
      time: formatToYyyyMmDd(dayCandlesItem[0]),
      open: Number(dayCandlesItem[1]),
      high: Number(dayCandlesItem[3]),
      low: Number(dayCandlesItem[4]),
      close: Number(dayCandlesItem[2]),
    }
  })

  return result.slice(0, 600).reverse()
}
