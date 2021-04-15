import styled from 'styled-components';

interface LinkButtonStyleProps {
  title: string;
}

export const Container = styled.div<LinkButtonStyleProps>`
  color: ${({ title }) =>
    title === 'Registrar' ? 'var(--blue)' : 'var(--orange)'};
  border: ${({ title }) =>
    title === 'Registrar' ? '1px solid var(--blue)' : 'none'};
  width: 100px;
  height: 40px;

  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.5s, color 0.5s;

  a {
    font-weight: 700;
    font-size: 1.1rem;
  }

  &:hover {
    background-color: ${({ title }) =>
      title === 'Registrar' ? 'var(--blue)' : 'var(--orange)'};
    color: var(--white);
  }
`;
