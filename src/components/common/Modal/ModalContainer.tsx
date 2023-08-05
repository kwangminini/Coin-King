import { alertAtom } from '@/atoms/modalAtom'
import AlertModal from '@/components/common/Modal/AlertModal'
import { useRecoilValue } from 'recoil'

export default function ModalContainer() {
  const alertModalAtom = useRecoilValue(alertAtom)
  return (
    <>
      {alertModalAtom.isShow && (
        <AlertModal title={alertModalAtom.title} text={alertModalAtom.text} />
      )}
    </>
  )
}
