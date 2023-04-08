import CoinHeader from '@/components/CoinHeader'
import TradingForm from '@/components/TradingForm'

export default function Investing() {
  return (
    <section className="flex h-full px-20 flex-col">
      <CoinHeader />
      <div className="h-350 border-gray-200 border w-full" />
      <TradingForm />
    </section>
  )
}
