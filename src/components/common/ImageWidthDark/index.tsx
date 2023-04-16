import Image from 'next/image'

interface IImageWidthDark {
  src: string
  alt: string
  darkSrc: string
  darkAlt: string
  width: number
  height: number
}

export function ImageWidthDark({
  src,
  alt,
  darkAlt,
  darkSrc,
  width,
  height,
}: IImageWidthDark) {
  return (
    <>
      {/* 라이트모드 이미지 */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="dark:hidden"
      />
      {/* 다크모드 이미지 */}
      <Image
        src={darkSrc}
        alt={darkAlt}
        width={width}
        height={height}
        className="hidden dark:flex"
      />
    </>
  )
}
