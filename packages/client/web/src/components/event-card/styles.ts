import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--white);
  transition: background-color 0.2s;
  box-shadow: 0px 0px 5px #0008;

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 5px 20px;
    max-width: 180px;

    h2 {
      font-size: 1rem;
      color: var(--dark);
      margin-top: 4px;
      max-width: 120px;
      text-align: center;
    }

    > p {
      font-size: 1rem;
    }

    p {
      text-align: justify;
      color: var(--gray);
      font-size: 0.9rem;
      margin: 5px 0 5px 0;
    }

    > p + p {
      font-weight: 700;
    }
  }
`;

export const CalendarPaper = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  bottom: -40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px #0008;
  background-color: #fff;

  > h1 {
    color: var(--dark);
    font-size: 1.8rem;
  }
`;

export const DateTimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 1rem;
`;

export const IconsGroup = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 100px;
  width: 100%;
  position: absolute;
  /* left: 2px; */
  top: 5px;
`;
