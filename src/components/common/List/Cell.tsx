import { useEffect, useRef, useState } from 'react'

interface ICellProps {
  children?: React.ReactNode //데이터가 하나의 문자열이 아닐 경우
  style?: string
  data?: string | number
  realTimeUpdate?: boolean
  realTimeUpdateColor?: string
}

export default function Cell({
  children,
  style,
  data,
  realTimeUpdate,
  realTimeUpdateColor,
}: ICellProps) {
  const [isNotFirst, setIsNotFirst] = useState(false)
  const dataRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (data && realTimeUpdate) {
      if (isNotFirst && dataRef.current) {
        dataRef.current.style.border = `1px solid ${realTimeUpdateColor}`
        timer = setTimeout(() => {
          dataRef.current!.style.border = 'none'
        }, 500)
      } else {
        setIsNotFirst(true)
      }
    }
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, realTimeUpdate])
  return (
    <div className={`flex items-center w-full ${style ? style : ''}`}>
      {data ? (
        <span className="h-30 flex items-center" ref={dataRef}>
          {data}
        </span>
      ) : (
        children
      )}
    </div>
  )
}
