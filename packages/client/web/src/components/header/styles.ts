import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--white);
  box-shadow: 0px 0px 2px var(--gray);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;

  img {
    width: 15rem;
    height: auto;
  }
`;
