import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

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
    <LoginForm />
  </Modal>
)
