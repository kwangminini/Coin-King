import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface IDefaultInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn
}
export default function DefaultInput({
  register,
  ...props
}: IDefaultInputProps) {
  return <input className="Input__element" {...register} {...props} />
}
