import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import { useState } from 'react';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import { Container, InputContainer, TitleContainer } from './styles';

import axios from 'axios';

function SignUp() {
  const [data, setData] = useState({});

  const history = useHistory();

  function handleChange(event) {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value
    });
  }

  async function handleSubmit() {
    try {
      await axios.post('http://localhost:3333/users', {
        ...data
      });

      history.push('/');
    }
    catch(error) {
      const message = error.response.data[0].message ? 
        error.response.data[0].message : "Desculpe, ocorreu um erro interno."

      toast(message, {
        position: 'bottom-center'
      });
    }
  }

  return (
    <Container>
      <TitleContainer>
        <h1>Energy Manager</h1>
        <span>Acompanhe seus dados de consumo de energia.</span>
      </TitleContainer>

      <InputContainer>
        <FormInput 
          icon="mail" 
          name="name" 
          placeholder="Name" 
          onChange={handleChange} 
        />

        <FormInput 
          icon="mail" 
          name="email" 
          placeholder="E-mail" 
          onChange={handleChange} 
        />

        <FormInput 
          icon="lock" 
          name="password" 
          placeholder="Password" type="password" 
          onChange={handleChange} 
        />

        <FormInput 
          icon="lock" 
          name="password_confirmation" 
          placeholder="Password confirmation" type="password" 
          onChange={handleChange} 
        />


        <Button onClick={handleSubmit}>ENTRAR</Button>
      </InputContainer>
      
    </Container>
  );
}

export default SignUp;