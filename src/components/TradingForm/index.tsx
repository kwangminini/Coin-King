'use client'

import Minus from '@/components/icons/Minus'
import Plus from '@/components/icons/Plus'
import Radio from '@/components/icons/Radio'
import Refresh from '@/components/icons/Refresh'
import Row from '@/components/TradingForm/Row'
import TabBar from '@/components/TradingForm/TabBar'
import Input from '@/components/TradingForm/Input'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { decreaseColor, increaseColor, mainFontColor } from '@/constants/color'
import { useSearchParams } from 'next/navigation'
interface IOrderOptions {
  key: string
  value: string
}
export interface IFormInputData {
  price: number
  count: number
  totalPrice: number
}
export interface IMenu {
  key: string
  value: string
  activeColor: string
}

const orderOptions: IOrderOptions[] = [
  { key: 'limit', value: '지정가' },
  { key: 'market', value: '시장가' },
]

const menu: IMenu[] = [
  { key: 'buy', value: '매수', activeColor: increaseColor },
  { key: 'sell', value: '매도', activeColor: decreaseColor },
  { key: 'history', value: '거래내역', activeColor: mainFontColor },
]

const defaultValues = {
  price: 0, //주문금액
  count: 0, //주문수량
  totalPrice: 0, //주문총액
}

export default function TradingForm() {
  const searchParams = useSearchParams()
  const coinId = searchParams.get('coin')
  const [activeMenu, setActiveMenu] = useState<IMenu>(menu[0])
  const [formData, setFormData] = useState({
    orderOption: 'limit', //주문구분
    possiblePrice: 1000000, //주문가능금액
  })
  const { handleSubmit, reset, control } = useForm<IFormInputData>({
    defaultValues,
  })
  const onSubmit = (data: any) => {
    console.log(data)
    console.log(typeof data.price)
    console.log(typeof data.count)
  }

  useEffect(() => {
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coinId])

  //초기화
  const init = () => {
    setActiveMenu(menu[0])
    reset(defaultValues)
  }
  /**
   * 메뉴 활성화 함수
   * @param menu - 활성화 시킬 메뉴
   */
  const handleActiveMenu = (menu: IMenu): void => {
    setActiveMenu(menu)
  }

  const handleFormData = (key: string, value: string | number) => {
    setFormData({ ...formData, [key]: value })
  }

  return (
    <article className="max-w-360 mt-20">
      <TabBar
        activeMenu={activeMenu}
        handleActiveMenu={handleActiveMenu}
        menu={menu}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row label="주문구분" height={30}>
          {orderOptions.map(({ key, value }: IOrderOptions) => (
            <button
              className="flex flex-1 items-center"
              onClick={() => handleFormData('orderOption', key)}
              key={key}
            >
              <Radio active={formData.orderOption === key} />
              <span className="ml-8 text-sm">{value}</span>
            </button>
          ))}
        </Row>
        <Row label="주문가능">
          <span className="font-semibold text-lg ml-auto">
            {formData.possiblePrice.toLocaleString('ko-KR')}
          </span>
          <span className="text-sm text-sub-font-color ml-8">KRW</span>
        </Row>
        <Row label="매수가격">
          <div className="flex border border-[#DFE0E5] rounded-sm h-full">
            <Input
              name={'price'}
              control={control}
              defaultValue={defaultValues.price}
              border={false}
            />
            <button className="min-w-30 flex justify-center items-center border-r border-l">
              <Minus />
            </button>
            <button className="min-w-30 flex justify-center items-center">
              <Plus />
            </button>
          </div>
        </Row>
        <Row label="주문수량" height={73}>
          <Input
            name={'count'}
            control={control}
            defaultValue={defaultValues.count}
            border={true}
          />
        </Row>
        <Row label="주문총액">
          <Input
            name={'totalPrice'}
            control={control}
            defaultValue={defaultValues.totalPrice}
            border={true}
          />
        </Row>
        {activeMenu.key !== 'history' && (
          <div className="flex h-44 px-16 mt-20">
            <button
              className="w-120 flex items-center justify-center bg-[#95959E] rounded-sm"
              onClick={() => reset(defaultValues)}
            >
              <Refresh />
              <span className="text-white text-sm font-bold ml-10">초기화</span>
            </button>
            <button
              type="submit"
              className="w-full ml-16 flex items-center justify-center font-bold text-white text-sm rounded-sm"
              style={{ backgroundColor: activeMenu.activeColor }}
            >
              {activeMenu.value}
            </button>
          </div>
        )}
      </form>
    </article>
  )
}
