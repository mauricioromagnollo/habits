import { BiCheck } from 'react-icons/bi';
import { Header } from '../components/header';
import {
  Container,
  Main,
  Section,
  RegisterButtons,
} from '../styles/pages/home';
import { LinkButton } from '../components/link-button';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header>
        <RegisterButtons>
          <LinkButton title="Entrar" page="login" />
          <LinkButton title="Registrar" page="register" />
        </RegisterButtons>
      </Header>
      <Main>
        <Section>
          <h1>Calendário de Eventos</h1>
          <h3>
            Uma forma símples e fácil de registrar e gerenciar os seus eventos
            importantes!
          </h3>
          <ul>
            <div>
              <BiCheck color="#FB6404" size={30} />
              <li>Crie seus eventos</li>
            </div>
            <div>
              <BiCheck color="#FB6404" size={30} />
              <li>Convide seus amigos</li>
            </div>
            <div>
              <BiCheck color="#FB6404" size={30} />
              <li>Não perca nenhum evento importante</li>
            </div>
            <div>
              <BiCheck color="#FB6404" size={30} />
              <li>Veja os eventos do mês</li>
            </div>
          </ul>
        </Section>
        <img src="calendar.svg" alt="Calendário" />
      </Main>
    </Container>
  );
}
