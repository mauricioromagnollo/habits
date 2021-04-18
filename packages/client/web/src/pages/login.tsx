import { FormEvent, useState, ChangeEvent, useContext } from 'react';
import { useRouter } from 'next/router';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

import { Header } from '../components/header';

import { Main, Form, Input, BackHome } from '../styles/pages/login';
import { AuthContext } from '../contexts/auth';

export default function Login(): JSX.Element {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { signIn } = useContext(AuthContext);

  const router = useRouter();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { email, password } = formData;

    try {
      await signIn({ email, password });
      router.push('/dashboard');
    } catch (err) {
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

        <p>
          Ainda não tem uma conta?
          <strong>
            <Link href="/register">Clique aqui</Link>
          </strong>{' '}
          para criar!
        </p>
      </Main>
    </>
  );
}
