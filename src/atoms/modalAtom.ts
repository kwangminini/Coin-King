import { atom } from 'recoil'

interface IAlertAtom {
  isShow: boolean
  text: string[]
  title: string
}
export const alertAtom = atom<IAlertAtom>({
  key: 'alertAtom',
  default: {
    isShow: false,
    text: [],
    title: '',
  },
})
