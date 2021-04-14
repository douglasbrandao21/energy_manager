import { Container } from './styles'
import Icons from '../Icons';
import { useState } from 'react';

function FormInput({ placeholder, icon, onChange, ...rest }) {
  const [isFilled, setIsFilled] = useState(false);

  function handleFilled(event) {
    const inputValue = event.target.value;

    if(inputValue && inputValue !== "") setIsFilled(true);
    else setIsFilled(false);

    onChange(event);
  }

  return (
    <Container>
      <Icons icon={icon} size={24} color={isFilled ? "#5BA885" : "#9F9F9F"} />
      <input {...rest} placeholder={placeholder} onChange={event => handleFilled(event)}></input>
    </Container>
  );
}

export default FormInput;