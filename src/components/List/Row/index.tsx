interface IProp {
  children: React.ReactNode
  style?: string
}

export default function Row({ children, style }: IProp) {
  return <li className={getRowStyle(style)}>{children}</li>
}

function getRowStyle(style?: string): string {
  const defaultColor = 'w-full flex'
  return style ? `${defaultColor} ${style}` : defaultColor
}
