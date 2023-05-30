import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import cls from './LoginForm.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState'
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const {username, password, error, isLoading} = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string)=>{
    dispatch(loginActions.setUsername(value))
  },[dispatch])

  const onChangePassword = useCallback((value: string)=>{
    dispatch(loginActions.setPassword(value))
  },[dispatch])

  const onLoginClick = useCallback(()=>{
    dispatch(loginByUsername({username, password}))
  },[dispatch, username, password])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
      <Input
        placeholder={t('Введите логин')}
        type="text"
        className={cls.input}
        onChange={onChangeUsername}
        value={username}
        autofocus
      />
      <Input
        placeholder={t('Введите пароль')}
        type="password"
        className={cls.input}
        onChange={onChangePassword}
        value={password}
      />
      <Button 
        className={cls.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
        >
        {t('Войти')}
      </Button>
    </div>
  )
})
