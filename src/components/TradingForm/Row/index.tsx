import { CSSProperties } from 'react'

interface IProps {
  label: string
  children: React.ReactNode
  height?: number
}

export default function Row({ label, children, height }: IProps) {
  return (
    <div
      className="flex flex-1 items-center px-16 mt-10 h-38"
      style={{ height }}
    >
      <label className="min-w-100 text-sm">{label}</label>
      {children}
    </div>
  )
}
