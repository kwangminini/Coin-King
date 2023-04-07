import CoinHeader from '@/components/CoinHeader'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Investing() {
  return (
    <section className="flex h-full px-20">
      <CoinHeader />
    </section>
  )
}
