'use client'
import ReactDOM from 'react-dom'

interface IAlertModalProps {
  title: string
  text: string[]
}
export default function AlertModal({ title, text }: IAlertModalProps) {
  return ReactDOM.createPortal(
    <div className="z-[100] rounded border border-[#999] fixed left-1/2 top-1/2 py-24 px-80 bg-white translate-x-[-50%] translate-y-[-50%] text-center">
      <p className="text-20 font-bold text-center">{title}</p>
      {text.map((textItem) => (
        <p className="text-16 text-center my-14" key={textItem}>
          {textItem}
        </p>
      ))}
      <button className="bg-main-color text-white font-bold text-14 px-18 py-4 rounded">
        확인
      </button>
    </div>,
    document.body
  )
}
