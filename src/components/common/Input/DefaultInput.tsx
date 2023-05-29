import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface IDefaultInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn
}
export default function DefaultInput({
  register,
  className,
  ...props
}: IDefaultInputProps) {
  return (
    <input
      className={`w-full text-right p-8 box-border focus:outline-none font-semibold max-h-38 border border-[#DFE0E5] rounded-sm ${className}`}
      {...register}
      {...props}
    />
  )
}
