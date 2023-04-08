import { IIconProp } from '@/components/icons/types'
import Image from 'next/image'

export default function Plus({ width, height }: IIconProp) {
  return (
    <Image
      src={'/plus.svg'}
      alt="plus"
      width={width ?? 14}
      height={height ?? 14}
    />
  )
}
