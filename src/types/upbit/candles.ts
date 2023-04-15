export interface IDayCandles {
  market: string //마켓명
  candle_date_time_utc: string //캔들 기준 시각(UTC 기준) yyyy-MM-dd'T'HH:mm:ss
  candle_date_time_kst: string //캔들 기준 시각(KST 기준) yyyy-MM-dd'T'HH:mm:ss
  opening_price: number //시가
  high_price: number //고가
  low_price: number //저가
  trade_price: number //종가
  timestamp: number //마지막 틱이 저장된 시각
  candle_acc_trade_price: number //누적 거래 금액
  candle_acc_trade_volume: number //누적 거래량
  prev_closing_price: number //전일 종가(UTC 0시 기준)
  change_price: number //전일 종가 대비 변화 금액
  change_rate: number //전일 종가 대비 변화량
  converted_trade_price: number //종가 환산 화폐 단위로 환산된 가격(요청에 convertingPriceUnit 파라미터 없을 시 해당 필드 포함되지 않음.)
}
