import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;

  > img {
    width: 100%;
    max-width: 600px;
    margin: 8rem 2rem 0 0;
  }
`;

export const RegisterButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
`;

export const Section = styled.section`
  margin: 0 0 0 50px;

  h1,
  h3,
  ul {
    margin-top: 30px;
  }

  > h1 {
    color: var(--dark);
    font-weight: 700;
    font-size: 2.8rem;
  }

  > h3 {
    color: var(--gray);
    max-width: 30rem;
    text-align: justify;
    font-weight: 400;
  }

  ul {
    list-style: none;

    li {
      color: var(--blue);
      font-weight: 700;
      margin-left: 10px;
    }

    > div {
      display: flex;
      align-items: center;
    }
  }
`;
