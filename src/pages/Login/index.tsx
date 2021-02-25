import React, { ChangeEvent, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { SForm, SPageWrapper, SLegend, SLabel, SButton } from './styles';
import { Input } from '../../shared/components/Input';
import { Paths } from '../../shared/defaults';

const Login: React.FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const history = useHistory();

  const loginOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLogin(event.target.value);
  };

  const passwordOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const onSubmit = (): void => {
    console.log({ login, password });
    localStorage.setItem('isAuthenticated', 'true');
    history.push(Paths.Disciplines);
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
        <SButton type='submit'>Войти</SButton>
      </SForm>
    </SPageWrapper>
  );
};

export { Login };
