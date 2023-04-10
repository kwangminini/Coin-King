'use client'
interface IProps {
  children: React.ReactNode
  style?: string
  onClick?: () => void
}

export default function Row({ children, style, onClick }: IProps) {
  return (
    <li className={`w-full flex ${style ? style : ''}`} onClick={onClick}>
      {children}
    </li>
  )
}
