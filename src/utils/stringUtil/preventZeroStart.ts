/**
 * 0으로 시작하는 숫자 방지
 * @param num
 * @returns {string} 0으로 시작하는 숫자를 제외한 숫자 string
 */
export const preventZeroStart = (num: string) => {
  return num.replace(/(^0+)/, '')
}
