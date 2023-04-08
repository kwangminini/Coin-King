import { IIconProp } from '@/components/icons/types'
import Image from 'next/image'

export default function Radio({ active, width, height }: IIconProp) {
  return (
    <Image
      src={active ? '/radio_button_active.svg' : '/radio_button.svg'}
      alt="radio"
      width={width ?? 18}
      height={height ?? 18}
    />
  )
}
