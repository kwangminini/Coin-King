import Image from 'next/image'

interface ILogoProps extends React.HTMLProps<HTMLImageElement> {
  width?: number
  height?: number
  className?: string
}

export default function Logo({ width, height, className }: ILogoProps) {
  return (
    <Image
      src={'/logo.svg'}
      alt="logo"
      width={width ? width : 76}
      height={height ? height : 32}
      className={className}
    />
  )
}
