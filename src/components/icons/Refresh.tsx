import { IIconProp } from '@/components/icons/types'
import Image from 'next/image'

export default function Refresh({ width, height }: IIconProp) {
  return (
    <Image
      src={'/refresh.svg'}
      alt="refresh"
      width={width ?? 16}
      height={height ?? 16}
    />
  )
}
