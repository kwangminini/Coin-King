export interface IUpbitCoinIfo {
  ty: 'ticker' | 'trade' | 'orderbook' //타입
  cd: string //마켓 코드 (ex. KRW-BTC)
  op: number //시가
  hp: number //고가
  lp: number //저가
  tp: number //현재가
  pcp: number //전일 종가
  atp: number //누적 거래대금(UTC 0시 기준)
  c: 'RISE' | 'EVEN' | 'FALL' // 전일 대비 (RISE => 상승, EVEN => 보합, FALL => 하락)
  cp: number //부호 없는 전일 대비 값
  scp: number //전일 대비 값
  cr: number //부호 없는 전일 대비 등락율
  scr: number //전일 대비 등락율
  ab: 'ASK' | 'BID' //매수,매도 구분 (ASK => 매도, BID: 매수)
  tv: number // 가장 최근 거래량
  atv: number //누적 거래량(UTC 0시 기준)
  tdt: string //최근 거래 일자(UTC) (format : yyyyMMdd)
  ttm: string //최근 거래 시각(UTC) (format : HHmmss)
  ttms: number //체결 타임스탬프 (milliseconds)
  aav: number //누적 매도량
  abv: number //누적 매수량
  h52wp: number //52주 최고가
  h52wdt: string //52주 최고가 달성일 (foramt : yyyy-MM-dd)
  l52wp: number //52주 최저가
  l52wdt: string //52주 최저가 달성일 (format : yyyy-MM-dd)
  ms: 'ACTIVE' | 'PREVIEW' | 'DELISTED' //거래상태 (ACTIVE => 거래지원가능, PREVIEW => 입금지원, DELISTED => 거래지원 종료)
  its: boolean //거래 정지 여부
  dd: Date //상장폐지일
  mw: 'NONE' | 'CAUTION' //유의 종목 여부 (NONE => 해당없음, CAUTION => 투자유의)
  tms: number //타임스탬프 (millisecond)
  atp24h: number //24시간 누적 거래대금
  atv24h: number //24시간 누적 거래량
  st: 'REALTIME' | 'SNAPSHOT' //스트림 타입 (REALTIME => 실시간, SNAPSHOT => 스냅샷)
}
