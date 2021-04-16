import { FormEvent, useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

import api from '../services/api';

import { Header } from '../components/header';

import { Main, Form, Input, BackHome } from '../styles/pages/login';

export default function Login(): JSX.Element {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const router = useRouter();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { email, password } = formData;

    const id = await api.post('/sessions', { email, password });

    if (id) {
      router.push('/dashboard');
    } else {
      alert('Usuário não cadastrado!');
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <>
      <Header />
      <BackHome>
        <Link href="/">
          <a>
            <FiArrowLeft />
            Voltar para Home
          </a>
        </Link>
      </BackHome>
      <Main>
        <Form onSubmit={handleSubmit}>
          <h1>Entre na sua conta</h1>
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
          <button type="submit">Entrar</button>
        </Form>
      </Main>
    </>
  );
}
