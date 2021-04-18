import styled from 'styled-components';

export const Main = styled.div`
  padding: 40px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;

  > div {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: var(--orange);
    }
  }

  > section {
    display: flex;
    /* flex-direction: row; */
    gap: 20px;
    margin: 30px 0px;
    width: 100vw;
    flex-wrap: wrap;
  }
`;

export const NovoEventoButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: var(--blue);
  cursor: pointer;

  border: 1px solid var(--blue);
  border-radius: 50px;
  transition: background-color 0.5s, color 0.5s;
  width: 150px;
  height: 40px;
  font-weight: 700;

  &:hover {
    background-color: var(--blue);
    color: var(--white);
    box-shadow: 0px 0px 10px var(--gray);
  }

  &:active {
    box-shadow: none;
  }
`;
