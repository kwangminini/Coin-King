interface IProp {
  children: React.ReactNode
  style?: string
}

export default function List({ children, style }: IProp) {
  return <ul className={getListStyle(style)}>{children}</ul>
}

function getListStyle(style?: string): string {
  const defaultColor = 'w-full'
  return style ? `${defaultColor} ${style}` : defaultColor
}
