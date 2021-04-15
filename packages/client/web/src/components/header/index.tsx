import { ReactNode } from 'react';

import { Container } from './styles';

interface HeaderProps {
  children?: ReactNode;
}

export const Header = ({ children }: HeaderProps): JSX.Element => {
  return (
    <Container>
      <img src="logo.png" alt="Caleventos" />
      {children}
    </Container>
  );
};
