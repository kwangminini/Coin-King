import { IDayCandles } from '@/model/upbit/candles'
import { formatToYyyyMmDd } from '@/util/date'
import cloneDeep from 'lodash/cloneDeep'

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
