import { CSSProperties } from 'react'

interface IRowProps {
  label: string
  children: React.ReactNode
  height?: number
  style?: CSSProperties
}

export default function LabelRow({
  label,
  children,
  height,
  style,
}: IRowProps) {
  return (
    <div
      className="flex flex-1 items-center px-16 mt-10 h-38"
      style={{ height, ...style }}
    >
      <label className="min-w-100 text-sm dark:text-white">{label}</label>
      {children}
    </div>
  )
}
