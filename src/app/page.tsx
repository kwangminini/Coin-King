import Card from '@/components/Card'
import { coins, ICoins } from '@/constants/coins'

export default function Home() {
  return (
    <div className="w-full max-w-[800px] mx-auto border-x border-main-border-color h-[calc(100vh-60px)]">
      <p className="text-center pt-12 font-normal text-2xl text-main-font-color">
        실시간 시세 정보
      </p>
      <div className="flex flex-col items-center mt-[45px] gap-9">
        {coins &&
          coins.map(({ icon, name, unit, id }: ICoins) => (
            <Card icon={icon} name={name} unit={unit} key={name} id={id} />
          ))}
      </div>
    </div>
  )
}
