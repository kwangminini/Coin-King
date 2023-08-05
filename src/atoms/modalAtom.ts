import { atom } from 'recoil'

interface IAlertAtom {
  isShow: boolean
  message: string
}
export const alertAtom = atom<IAlertAtom>({
  key: 'alertAtom',
  default: {
    isShow: false,
    message: '',
  },
})
