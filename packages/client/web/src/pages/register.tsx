import { FormEvent, useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';

import api from '../services/api';

import { Header } from '../components/header';

import { Main, Form, Input } from '../styles/pages/register';

export default function Register(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const router = useRouter();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { name, email, password } = formData;
    const data = new FormData();

    data.append('name', name);
    data.append('email', email);
    data.append('password', password);

    alert('Usuário criado!');

    await api.post('/users', data);

    router.push('/');
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <>
      <Header />
      <Main>
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input
            type="text"
            name="name"
            placeholder="Nome"
            onChange={handleInputChange}
          />

          <Input
            type="text"
            name="email"
            placeholder="e-mail"
            onChange={handleInputChange}
          />

          <Input
            type="password"
            name="password"
            placeholder="senha"
            onChange={handleInputChange}
          />
          <button type="submit">Cadastrar</button>
        </Form>
      </Main>
    </>
  );
}
