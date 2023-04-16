import Image from 'next/image'
import Link from 'next/link'

export default function Logo({
  width,
  height,
}: {
  width?: number
  height?: number
}) {
  return (
    <Image
      src={'/logo.svg'}
      alt="logo"
      width={width ? width : 76}
      height={height ? height : 32}
    />
  )
}
