import LabelRow from '@/components/TradingForm/LabelRow'

//주문 수량 퍼센트 변수
const COUNT_PERCENT = [10, 25, 50, 100]

export default function CountPercent() {
  return (
    <LabelRow label="">
      <div className="flex w-full gap-5 h-full">
        {COUNT_PERCENT.map((percent) => (
          <button
            key={percent}
            className="flex flex-1 items-center justify-center border border-input-border-grey text-14 rounded-sm"
          >
            {percent}%
          </button>
        ))}
      </div>
    </LabelRow>
  )
}
