'use client'
import { RecoilRoot } from 'recoil'
interface IRecoilContextProps {
  children: React.ReactNode
}
export default function RecoilContext({ children }: IRecoilContextProps) {
  return <RecoilRoot>{children}</RecoilRoot>
}
