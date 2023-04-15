export interface ICandles {
  status: string //결과 상태 코드 (정상: 0000, 그 외 에러 코드 참조)
  /**
   * [data] – [N] – [0]	기준 시간	Integer (String)
   * [data] – [N] – [1]	시가	Number (String)
   * [data] – [N] – [2]	종가	Number (String)
   * [data] – [N] – [3]	고가	Number (String)
   * [data] – [N] – [4]	저가	Number (String)
   * [data] – [N] – [5]	거래량	Number (String)
   */
  data: ICandlesData[]
}

export type ICandlesData = (number | string)[]
