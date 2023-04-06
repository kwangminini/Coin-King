'use client'
interface IProp {
  children: React.ReactNode
  style?: string
  onClick?: () => void
}

export default function Row({ children, style, onClick }: IProp) {
  return (
    <li className={`w-full flex ${style ? style : ''}`} onClick={onClick}>
      {children}
    </li>
  )
}
