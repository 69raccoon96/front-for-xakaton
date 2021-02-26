import React, { ChangeEvent, FormEvent, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { SForm, SPageWrapper, SLegend, SLabel, SButton, SErrorText } from './styles';
import { Input } from '../../shared/components/Input';
import { Paths } from '../../shared/defaults';
import { useAppStore } from '../../mobx';

const Login: React.FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const { store } = useAppStore();
  const history = useHistory();

  const loginOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setError('');
    setLogin(event.target.value);
  };

  const passwordOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setError('');
    setPassword(event.target.value);
  };

  const onSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    await store
      .login({ login, password })
      .then(() => {
        localStorage.setItem('isAuthenticated', 'true');
        history.push(Paths.Disciplines);
      })
      .catch(() => setError('Неверный логин или пароль'));
  };

  return (
    <SPageWrapper>
      <SForm onSubmit={onSubmit}>
        <SLegend>Логин</SLegend>
        <Input name='login' type='text' value={login} onChange={loginOnChange} />
        <SLabel>
          Пароль
          <Input name='password' type='password' value={password} onChange={passwordOnChange} />
        </SLabel>
        {error && <SErrorText>{error}</SErrorText>}
        <SButton type='submit'>Войти</SButton>
      </SForm>
    </SPageWrapper>
  );
};

export { Login };
