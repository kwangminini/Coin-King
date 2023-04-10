import Cell from '@/components/common/List/Cell'
import Row from '@/components/common/List/Row'

interface IProps {
  children: React.ReactNode
  style?: string
}

export default function List({ children, style }: IProps) {
  return <ul className={`w-full ${style ? style : ''}`}>{children}</ul>
}

List.Row = Row
List.Cell = Cell
