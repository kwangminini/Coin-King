/**
 * 전일 대비 증감율 가공 함수
 * @param {number} scr - 전일 대비 증감율
 * @returns '+전일 대비 증감율%' or '-저일 대비 증감율%' or '0%'
 */
export function getSignedChangeRate(scr: number): string {
  const _scr = scr?.toLocaleString('ko-KR') + '%'

  if (scr && scr > 0) {
    return `+${_scr}`
  }

  return _scr
}
