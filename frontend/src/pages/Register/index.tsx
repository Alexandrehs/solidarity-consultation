import React from 'react';

import {Container, Form, FormButton, Doctor} from './styles';

const Register: React.FC = () => {
  return (
    <Container>
      <strong>Formulário de cadastro.</strong>
      <Form>
        <strong>Seu nome,</strong>
        <input type="text" name="name" placeholder="nome"/>
        <strong>Sua senha,</strong>
        <input type="password" name="name" placeholder="senha"/>

        <strong>Você é médico?</strong>
        <select name="type" id="">
          <option value="1">Sim</option>
          <option value="2">Não</option>
        </select>

        <Doctor>
          <strong>Seu registro,</strong>
          <input type="text" name="indentification" id=""/>
        </Doctor>

        <FormButton>
          <button className="button">Criar</button>
        </FormButton>
      </Form>
    </Container>
  );
}

export default Register;