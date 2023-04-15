import SideCoinList from '@/components/SideCoinList'

interface IInvestingLayoutProps {
  children: React.ReactNode
}
export default function InvestingLayout({ children }: IInvestingLayoutProps) {
  return (
    <div className="flex h-full">
      <SideCoinList />
      <section className="w-full">{children}</section>
    </div>
  )
}
