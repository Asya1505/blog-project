import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import cls from './Navbar.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
          <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            className={cls.links}
            onClick={onLogout}
          >
            {t('Выйти')}
          </Button>
          <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
        </div>
      </div>
    )
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={onToggleModal}
        >
          {t('Войти')}
        </Button>
        <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
      </div>
    </div>
  )
}
