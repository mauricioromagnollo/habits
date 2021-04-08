import { Container } from '../styles/components/header';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps): JSX.Element => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
};
