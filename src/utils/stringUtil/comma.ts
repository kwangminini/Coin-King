/**
 * 문자열에서 , 포함하는 함수
 * @param {string} str
 * @returns {string} , 포함된 문자열
 */
export const comma = (str: string): string => {
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')
}
