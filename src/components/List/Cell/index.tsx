import { CSSProperties } from 'react'

interface IProp {
  children?: React.ReactNode //데이터가 하나의 문자열이 아닐 경우
  data?: string //데이터가 하나의 문자일경우
  style?: string
}

export default function Cell({ data, children, style }: IProp) {
  //데이터가 하나의 문자열일 경우
  if (data) {
    return <div className={getCellStyle(style)}>{data}</div>
  }
  //데이터가 하나의 문자열로 끝나지 않는 경우
  return <div className={getCellStyle(style)}>{children}</div>
}

function getCellStyle(style?: string): string {
  const defaultColor = 'flex items-center w-full'
  return style ? `${defaultColor} ${style}` : defaultColor
}
