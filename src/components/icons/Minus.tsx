import { IIconProp } from '@/components/icons/types'
import Image from 'next/image'

export default function Minus({ width, height }: IIconProp) {
  return (
    <Image
      src={'/minus.svg'}
      alt="minus"
      width={width ?? 14}
      height={height ?? 14}
    />
  )
}
