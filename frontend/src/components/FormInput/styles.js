import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  padding: 0 24px;

  flex: 1;

  min-height: 48px;

  margin: 8px 0;

  background-color: #FFF;

  border-radius: 50px;

  > input {
    display: flex;

    flex: 1;

    margin-left: 16px;

    border: none;
    
    font-size: 14px;
    color: #6F6F6F;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
  }
`;