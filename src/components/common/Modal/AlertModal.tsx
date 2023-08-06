'use client'
import { alertAtom } from '@/atoms/modalAtom'
import ReactDOM from 'react-dom'
import { useResetRecoilState } from 'recoil'

interface IAlertModalProps {
  title: string
  text: string[]
}
export default function AlertModal({ title, text }: IAlertModalProps) {
  const resetAlertModalAtom = useResetRecoilState(alertAtom)

  return ReactDOM.createPortal(
    <div className="z-[100] rounded border border-[#999] fixed left-1/2 top-1/2 py-24 px-150 bg-white translate-x-[-50%] translate-y-[-50%] text-center">
      <p className="text-24 font-bold text-center">{title}</p>
      {text.map((textItem) => (
        <p className="text-18 text-center my-14" key={textItem}>
          {textItem}
        </p>
      ))}
      <button
        className="bg-main-color text-white font-bold text-16 px-18 py-6 rounded"
        onClick={resetAlertModalAtom}
      >
        확인
      </button>
    </div>,
    document.body
  )
}
