'use client'
interface IRowProps {
  children: React.ReactNode
  style?: string
  onClick?: () => void
}

export default function Row({ children, style, onClick }: IRowProps) {
  return (
    <li className={`w-full flex ${style ? style : ''}`} onClick={onClick}>
      {children}
    </li>
  )
}
