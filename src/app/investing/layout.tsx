import SideCoinList from '@/components/SideCoinList'

interface IProp {
  children: React.ReactNode
}
export default function InvestingLayout({ children }: IProp) {
  return (
    <div className="flex h-full">
      <SideCoinList />
      <section className="w-full">{children}</section>
    </div>
  )
}
