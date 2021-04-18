import styled from 'styled-components';

import InputMask from 'react-input-mask';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin-bottom: 2rem;
  }

  > button {
    width: 300px;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color: var(--green);
    color: var(--white);
    font-weight: 700;
    box-shadow: 0px 0px 2px #000;
    margin-top: 10px;
  }

  h4 {
    margin: 20px 0px;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  height: 40px;
  width: 300px;
  border: 1px solid var(--gray);
  outline: none;
  padding: 0 10px;
  margin-top: 5px;

  &:focus {
    border: 2px solid var(--blue);
  }
`;

export const DateInput = styled(InputMask)`
  color: var(--gray);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 300px;
  border-radius: 10px;
  padding-left: 10px;
  outline: none;

  border: 1px solid var(--gray);

  &:focus {
    border: 2px solid var(--blue);
  }
`;

export const TimeInput = styled(InputMask)`
  color: var(--gray);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 300px;
  border-radius: 10px;
  padding-left: 10px;
  outline: none;

  border: 1px solid var(--gray);

  &:focus {
    border: 2px solid var(--blue);
  }
`;
