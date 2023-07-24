import { atom } from 'recoil'

const alertAtom = atom({
  key: 'alertAtom',
  default: {
    isShow: false,
    message: '',
  },
})
