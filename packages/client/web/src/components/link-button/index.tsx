import Link from 'next/link';

import { Container } from './styles';

interface LinkButtonProps {
  title: string;
  page: string;
}

export const LinkButton = ({ title, page }: LinkButtonProps): JSX.Element => {
  return (
    <Container title={title}>
      <Link href={page}>
        <a>{title}</a>
      </Link>
    </Container>
  );
};
