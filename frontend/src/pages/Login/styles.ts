import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 250px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  >strong {
    font-size: 20px;
    padding-bottom: 5px;
  }
`;

export const FormButtom = styled.div`
  display: flex;
  justify-content: space-between;
  aling-items: center;
  padding-top: 10px;

  >span {
    font-size: 12px;
    text-decoration: none;
  }
`;

export const FormInputs = styled.div`
  
`;