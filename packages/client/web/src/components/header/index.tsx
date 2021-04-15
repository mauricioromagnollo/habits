import { LinkButton } from '../link-button';

import { Container } from './styles';

export const Header = (): JSX.Element => {
  return (
    <Container>
      <img src="logo.png" alt="Caleventos" />
      <div>
        <LinkButton title="Entrar" page="login" />
        <LinkButton title="Registrar" page="register" />
      </div>
    </Container>
  );
};
