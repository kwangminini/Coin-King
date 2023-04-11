import { ICoin } from '@/constants/coinList'
import Image from 'next/image'
import PriceBox from '@/components/CoinCard/PriceBox'

export default function CoinCard({ icon, darkIcon, name, unit, id }: ICoin) {
  return (
    <div className="w-full max-w-500 h-80 border-[#eee] border shadow-[0_8px_16px_rgba(0,0,0,0.16)] rounded-xl px-36 flex items-center">
      {/**일반모드일 때 아이콘 */}
      <Image
        src={icon}
        alt={id}
        width={34}
        height={34}
        className="dark:hidden"
      />
      {/**다크모드일 때 아이콘 */}
      <Image
        src={darkIcon}
        alt={id}
        width={34}
        height={34}
        className="hidden dark:block"
      />
      <div className="ml-6 flex flex-col">
        <p className="text-base text-main-font-color">{name}</p>
        <p className="text-gray-400 text-sm">{unit}</p>
      </div>
      <PriceBox coinId={id} />
    </div>
  )
}
