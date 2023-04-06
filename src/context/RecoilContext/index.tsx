'use client'
import { RecoilRoot } from 'recoil'
interface IProp {
  children: React.ReactNode
}
export default function RecoilContext({ children }: IProp) {
  return <RecoilRoot>{children}</RecoilRoot>
}
