import { ICoin } from '@/model/coin'
import Image from 'next/image'
import PriceBox from '@/components/Card/PriceBox'

export default function Card({ icon, name, unit, id }: ICoin) {
  return (
    <div className="w-full max-w-[500px] h-20 border-[#eee] border shadow-[0_8px_16px_rgba(0,0,0,0.16)] rounded-xl px-9 flex items-center">
      <Image src={icon} alt={id} width={34} height={34} />
      <div className="ml-6 flex flex-col">
        <p className="text-base text-main-font-color">{name}</p>
        <p className="text-gray-400 text-sm">{unit}</p>
      </div>
      <PriceBox coinId={id} />
    </div>
  )
}
