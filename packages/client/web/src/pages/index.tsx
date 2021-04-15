import { BiCheck } from 'react-icons/bi';
import { Header } from '../components/header';
import { Container, Main, Section } from '../styles/pages/home';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header />
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
