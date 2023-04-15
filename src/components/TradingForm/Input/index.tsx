'use client'
import { NumericFormat } from 'react-number-format'
import { Controller, Control } from 'react-hook-form'
import { IFormInputData } from '@/components/TradingForm'

interface IInputProps {
  name: 'price' | 'count' | 'totalPrice'
  control: Control<IFormInputData>
  defaultValue: number
  border: boolean
}

export default function Input({
  name,
  control,
  defaultValue,
  border,
}: IInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <NumericFormat
          thousandSeparator={true}
          className={getInputStyle(border)}
          {...field}
        />
      )}
    />
  )
}

function getInputStyle(border: boolean): string {
  return `w-full text-right p-8 box-border focus:outline-none font-semibold max-h-38 ${
    border ? 'border border-[#DFE0E5] rounded-sm' : ''
  }`
}
