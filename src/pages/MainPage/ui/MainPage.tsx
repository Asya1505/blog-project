import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
  const { t } = useTranslation()
  const [value, setValue] = useState<string>('')

  return (
    <div>
      <BugButton />
      <div>{t('Главная')}</div>
      <Counter />
      <Input
        type='text'
        value={value}
        onChange={(value) => setValue(value)}
        placeholder='введите текст'
      />
    </div>
  );
};

export default MainPage;
