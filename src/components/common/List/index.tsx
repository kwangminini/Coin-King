interface IProp {
  children: React.ReactNode
  style?: string
}

export default function List({ children, style }: IProp) {
  return <ul className={`w-full ${style ? style : ''}`}>{children}</ul>
}
