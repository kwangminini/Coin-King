import { ICoins } from '@/constants/coins'
import Image from 'next/image'
import { Fragment } from 'react'

export default function Card({ icon, name, unit, id }: ICoins) {
  const btcPrice = 29700000
  const btcPer = 2.56
  return (
    <div className="w-full max-w-[500px] h-20 border-main-border-color shadow-[0_8px_16px_rgba(0,0,0,0.16)] rounded-xl px-9 flex items-center">
      <Image src={icon} alt={id} width={34} height={34} />
      <div className="ml-6 flex flex-col">
        <p className="text-base text-main-font-color">{name}</p>
        <p className="text-gray-400 text-sm">{unit}</p>
      </div>
      <div className="ml-auto flex flex-col items-end">
        <p className="text-base text-increase-color font-semibold">
          {btcPrice.toLocaleString('ko-KR')}
        </p>
        <p className="text-increase-color font-semibold text-sm">{btcPer}</p>
      </div>
    </div>
  )
}
