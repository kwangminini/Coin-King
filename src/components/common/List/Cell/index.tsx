interface IProp {
  children?: React.ReactNode //데이터가 하나의 문자열이 아닐 경우
  style?: string
}

export default function Cell({ children, style }: IProp) {
  return (
    <div className={`flex items-center w-full ${style ? style : ''}`}>
      {children}
    </div>
  )
}
