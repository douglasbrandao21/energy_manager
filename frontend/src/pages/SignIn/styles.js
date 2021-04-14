import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  max-width: 450px;
  
  margin: 0 auto;

  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  span {
    color: #6F6F6F;
  }
`;

export const TitleContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  flex-direction: column;

  margin-bottom: 32px;

  h1 {
    color: #5BA885;
  }
`;

export const InputContainer = styled.div`
  display: flex;

  flex-direction: column;

  width: 100%;

  button {
    margin-top: 24px;
  }

  >div:last-child {
    margin-top: 24px;

    font-size: 14px;

    a {
      text-decoration: none;

      color: #5BA885;

      transition: 0.25s ease;

      &:hover {
        color: #4A8B6D;
      }
    }
  }
`;