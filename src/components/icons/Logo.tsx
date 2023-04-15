import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href={'/'}>
      <Image
        src={'/logo.svg'}
        alt="logo"
        width={76}
        height={32}
        className="min-w-76"
      />
    </Link>
  )
}
