import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

interface LoginModalProps {
  isOpen?: boolean,
  onClose?: () => void
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => (
  <Modal
    className={classNames('', {}, [])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <Suspense fallback={<Loader/>}>
      <LoginFormAsync />
    </Suspense>
  </Modal>
)
