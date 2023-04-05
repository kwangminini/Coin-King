'use client'
interface IProp {
  children: React.ReactNode
  style?: string
  onClick?: () => void
}

export default function Row({ children, style, onClick }: IProp) {
  return (
    <li className={getRowStyle(style)} onClick={onClick}>
      {children}
    </li>
  )
}

function getRowStyle(style?: string): string {
  const defaultColor = 'w-full flex'
  return style ? `${defaultColor} ${style}` : defaultColor
}
