import CoinHeader from '@/components/CoinHeader'
import TradingChart from '@/components/TradingChart'
import TradingForm from '@/components/TradingForm'

export default function Investing() {
  return (
    <section className="flex h-full px-20 flex-col">
      <CoinHeader />
      <TradingChart />
      <TradingForm />
    </section>
  )
}
