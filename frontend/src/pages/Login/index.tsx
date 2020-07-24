import React from 'react';
import {Link} from 'react-router-dom';

import {Container, Form, FormButtom, FormInputs} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Form>
        <strong>Bem vindo, faça seu login.</strong>
        <FormInputs>
          <input type="text" name="id" placeholder="id" />
          <input type="password" name="password" placeholder="password" />
        </FormInputs>

        <FormButtom>
          <Link to="/register">
            <span>não tenho cadastro.</span>
          </Link>
          <button className="button">logar</button>
        </FormButtom>
      </Form>
    </Container>
  );
}

export default Login;