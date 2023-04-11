import CoinCard from '@/components/CoinCard'
import { coinList, ICoin } from '@/constants/coinList'

export default function Home() {
  return (
    <div className="w-full max-w-800 mx-auto border-x border-main-border-color h-[calc(100vh-60px)]">
      <p className="text-center pt-48 font-normal text-2xl text-main-font-color">
        실시간 시세 정보
      </p>
      <div className="flex flex-col items-center mt-45 gap-36">
        {coinList &&
          coinList.map(({ icon, darkIcon, name, unit, id }: ICoin) => (
            <CoinCard
              icon={icon}
              darkIcon={darkIcon}
              name={name}
              unit={unit}
              key={name}
              id={id}
            />
          ))}
      </div>
    </div>
  )
}
