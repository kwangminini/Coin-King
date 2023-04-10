import SideCoinList from '@/components/SideCoinList'

interface IProps {
  children: React.ReactNode
}
export default function InvestingLayout({ children }: IProps) {
  return (
    <div className="flex h-full">
      <SideCoinList />
      <section className="w-full">{children}</section>
    </div>
  )
}
