import { CSSProperties } from 'react'

interface IRowProps {
  label: string
  children: React.ReactNode
  height?: number
}

export default function Row({ label, children, height }: IRowProps) {
  return (
    <div
      className="flex flex-1 items-center px-16 mt-10 h-38"
      style={{ height }}
    >
      <label className="min-w-100 text-sm dark:text-white">{label}</label>
      {children}
    </div>
  )
}
