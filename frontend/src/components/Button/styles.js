import styled from 'styled-components';

export const Container = styled.button`
  display: flex;

  width: ${props => props.width ? props.width : 'auto'};

  align-items: center;
  justify-content: center;

  background-color: #5BA885;

  border: none;
  outline: none;

  flex: 1;

  font-weight: 700;
  color: #FFF;

  border-radius: 100px;

  min-height: 48px;

  transition: 0.25s ease;

  &:hover {
    background-color: #4A8B6D;
  }

  > svg {
    margin-right: 8px;
  }
`;