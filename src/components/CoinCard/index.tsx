import { ICoin } from '@/constants/coinList'
import PriceBox from '@/components/CoinCard/PriceBox'
import { ImageWidthDark } from '@/components/common/ImageWidthDark'

export default function CoinCard({ icon, darkIcon, name, unit, id }: ICoin) {
  return (
    <div className="w-full max-w-500 h-80 border-[#eee] border shadow-[0_8px_16px_rgba(0,0,0,0.16)] rounded-xl px-36 flex items-center">
      <ImageWidthDark
        src={icon}
        darkSrc={darkIcon}
        alt={id}
        darkAlt={id}
        width={34}
        height={34}
      />
      <div className="ml-6 flex flex-col">
        <p className="text-base text-main-font-color dark:text-white">{name}</p>
        <p className="text-gray-400 text-sm">{unit}</p>
      </div>
      <PriceBox coinId={id} />
    </div>
  )
}
