import cloneDeep from 'lodash/cloneDeep'
import { IDayCandles } from '@/model/upbit/candles'
import { formatToYyyyMmDd } from '@/utils/dateUtil/formatToYyyyMmDd'
/**
 * 일봉 차트에 필요한 데이터로 가공해주는 함수
 * @param {IDayCandles[]} dayCandlesArr
 * @returns
 */
export function getDayCandlestickData(dayCandlesArr: IDayCandles[]) {
  const _dayCandlesArr = cloneDeep(dayCandlesArr)
  const result = _dayCandlesArr.map((dayCandlesItem) => {
    return {
      time: formatToYyyyMmDd(dayCandlesItem.candle_date_time_kst),
      open: dayCandlesItem.opening_price,
      high: dayCandlesItem.high_price,
      low: dayCandlesItem.low_price,
      close: dayCandlesItem.trade_price,
    }
  })

  return result.reverse()
}
