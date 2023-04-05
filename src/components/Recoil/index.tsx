'use client'
import { RecoilRoot } from 'recoil'
interface IProp {
  children: React.ReactNode
}
export default function Recoil({ children }: IProp) {
  return <RecoilRoot>{children}</RecoilRoot>
}
