'use client'

import Radio from '@/components/icons/Radio'
import Refresh from '@/components/icons/Refresh'
import LabelRow from '@/components/TradingForm/LabelRow'
import TabBar from '@/components/TradingForm/TabBar'

import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { decreaseColor, increaseColor, mainFontColor } from '@/constants/color'
import { useSearchParams } from 'next/navigation'
import { ImageWidthDark } from '@/components/common/ImageWidthDark'
import { ICoin } from '@/constants/coinList'
import { useGetCoinTicker } from '@/queries/upbit'
import DefaultInput from '@/components/common/Input/DefaultInput'
import {
  preventZeroStart,
  thousandSeparator,
  unComma,
} from '@/utils/stringUtil'
import { useGetUserAmount } from '@/queries/userAmount'
import CountPercent from '@/components/TradingForm/CountPercent'
import { useSetRecoilState } from 'recoil'
import { alertAtom } from '@/atoms/modalAtom'
import { tailwindColorObj } from '@/utils/colorUtil'

interface IOrderOptions {
  key: string
  value: string
}
export interface IFormInputData {
  price: string
  count: string
  totalPrice: string
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

interface ITradingFormProps {
  selectedCoin: ICoin
}

export default function TradingForm({ selectedCoin }: ITradingFormProps) {
  const searchParams = useSearchParams()
  const coinId = searchParams?.get('coin')
  const [activeMenu, setActiveMenu] = useState<IMenu>(menu[0])
  const [formData, setFormData] = useState({
    orderOption: 'limit', //주문구분
    possiblePrice: 0, //주문가능금액
  })
  const { data: coinTicker } = useGetCoinTicker(selectedCoin.codes || '')
  const { data: userAmount, isSuccess } = useGetUserAmount()
  const defaultValues = {
    price: thousandSeparator(String(coinTicker?.trade_price)),
    count: '0',
    totalPrice: '0',
  }
  // const [defaultValues, setDefaultValues] = useState({
  //   price: thousandSeparator(String(coinTicker?.trade_price)),
  //   count: '0',
  //   totalPrice: '0',
  // })
  const setAlertModalAtom = useSetRecoilState(alertAtom)
  const { handleSubmit, reset, register, setValue, getValues, getFieldState } =
    useForm<IFormInputData>({
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

  //최초 현재가격 defaultValue 설정
  useEffect(() => {
    if (coinTicker?.trade_price) {
      reset({ price: thousandSeparator(String(coinTicker.trade_price)) })
    }
  }, [coinTicker])

  useEffect(() => {
    if (userAmount) {
      setFormData((prev) => ({ ...prev, possiblePrice: userAmount.amount }))
    }
  }, [userAmount])

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

  const handleOnChange = useCallback(
    (name: keyof IFormInputData, thousandSeparatorFlag: boolean) => {
      return (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        const preventZeroStartValue = preventZeroStart(value)
        setValue(
          name,
          thousandSeparatorFlag
            ? thousandSeparator(preventZeroStartValue)
            : preventZeroStartValue
        )
      }
    },
    []
  )
  //주문수량 퍼센트에 따른 주문수량, 주문총액 설정
  const handleCalcCountPercent = (percent: number) => {
    if (userAmount?.amount) {
      const _totalPrice = Math.floor(userAmount?.amount * (percent / 100))
      handleSetTotalPrice(_totalPrice)
      handleSetCount(_totalPrice)
    }
    //주문총액 설정
    function handleSetTotalPrice(totalPrice: number) {
      setValue('totalPrice', totalPrice.toLocaleString('ko-KR'))
    }
    //주문수량 설정
    function handleSetCount(totalPrice: number) {
      const unCommaPrice = unComma(getValues('price'))
      setValue('count', (totalPrice / Number(unCommaPrice)).toFixed(5))
    }
  }

  const handleActiveColor = (menu: IMenu) => {
    const menuKeyColorObj: { [key: string]: string } = {
      buy: tailwindColorObj.increase,
      sell: tailwindColorObj.decrease,
    }
    return menuKeyColorObj[menu.key]
  }
  return (
    <article className="max-w-360 mt-2">
      <TabBar
        activeMenu={activeMenu}
        handleActiveMenu={handleActiveMenu}
        menu={menu}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <LabelRow label="주문구분" style={{ height: 30 }}>
          {orderOptions.map(({ key, value }: IOrderOptions) => (
            <button
              className="flex flex-1 items-center"
              onClick={() => handleFormData('orderOption', key)}
              key={key}
            >
              <Radio active={formData.orderOption === key} />
              <span className="ml-8 text-sm dark:text-white">{value}</span>
            </button>
          ))}
        </LabelRow>
        <LabelRow label="주문가능">
          <span className="font-semibold text-lg ml-auto">
            {formData.possiblePrice.toLocaleString('ko-KR')}
          </span>
          <span className="text-sm text-sub-font-color ml-8">KRW</span>
        </LabelRow>
        <LabelRow label="매수가격">
          <div className="flex border border-[#DFE0E5] rounded-sm h-full">
            <DefaultInput
              register={register('price')}
              onChange={handleOnChange('price', true)}
              className={'border-none'}
            />
            <button className="min-w-30 flex justify-center items-center border-r border-l">
              <ImageWidthDark
                src={'/minus.svg'}
                alt={'minus'}
                darkSrc={'/minus_dark.svg'}
                width={14}
                height={14}
              />
            </button>
            <button className="min-w-30 flex justify-center items-center">
              <ImageWidthDark
                src={'/plus.svg'}
                alt={'plus'}
                darkSrc={'/plus_dark.svg'}
                width={14}
                height={14}
              />
            </button>
          </div>
        </LabelRow>
        <LabelRow label="주문수량">
          <DefaultInput
            register={register('count')}
            onChange={handleOnChange('count', true)}
          />
        </LabelRow>
        <CountPercent onClick={handleCalcCountPercent} />
        <LabelRow label="주문총액">
          <DefaultInput
            register={register('totalPrice')}
            onChange={handleOnChange('totalPrice', true)}
          />
        </LabelRow>
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
              className={`w-full ml-16 flex items-center justify-center font-bold text-white text-sm rounded-sm ${handleActiveColor(
                activeMenu
              )}`}
              onClick={() =>
                setAlertModalAtom({
                  isShow: true,
                  text: [`${activeMenu.value}가 완료되었습니다.`],
                  title: activeMenu.value,
                })
              }
            >
              {activeMenu.value}
            </button>
          </div>
        )}
      </form>
    </article>
  )
}
