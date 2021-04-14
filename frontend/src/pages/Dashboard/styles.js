import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;

  padding: 24px;

  > div:first-child {
    display: flex;

    flex-direction: column;
    justify-content: space-between;

    height: calc(100vh - 48px);
    
    width: 300px;

    padding: 40px 24px;

    position: fixed;

    background-color: #EFEFEF;
    border-radius: 16px;
  }

  > div:last-child {
    flex: 1;

    display: flex;
    flex-direction: column;

    padding: 40px 24px;

    margin-left: 324px;

    h1 {
      color: #5BA885;
    }

    h3 {
      color: #6F6F6F;

      font-weight: 400;
    }
  }
`;

export const Input = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  
  width: 350px;
  height: 40px;

  border-radius: 24px;
  
  background-color: #EFEFEF;

  padding: 0 16px;

  > svg {
    fill: #6F6F6F;
  }

  > input {
    flex: 1;
    height: 40px;

    margin-left: 8px;

    background-color: transparent;

    border: none;
  }
`;

export const DashboardHeader = styled.div`
  width: 100%;
  display: flex;

  flex-direction: row;

  max-height: 75px;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 40px;

  h3 {
    font-size: 16px;
  }

  > div:first-child {
    display: flex;

    justify-content: center;
    align-items: center;

    gap: 32px;
  }

  > div:last-child {
    button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 200px;
      height: 48px;

      font-weight: 700;

      border-radius: 8px;
    
      outline: none;
      border: none;

      margin-left: 8px;

      background-color: #5BA885;

      color: #FFF;

      transition: 0.25s ease;

      &:hover {
        background-color: #4A8B6D;
      }

      > svg {
        margin-right: 8px;
      }
    }
  }
`;

export const CardLine = styled.div`
  display: flex;

  flex-direction: row;

  flex: 1;
  
  gap: 16px;

  margin-bottom: 16px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  
  flex: 1;

  border-radius: 24px;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);

  background-color: #FFF;
`;

export const ChartContainer = styled.div`
  flex: 1;

  position: relative;

  > canvas {
    max-height: 400px;

    margin: 32px;
  }
`;

export const CardHeader = styled.div`
  padding: 32px;

  color: #5BA885;

  h1 {
    font-size: 24px;
  }

  h3 {
    font-size: 14px;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;

  align-items: center;

  max-height: 80px;

  img {
    height: 70px;
  }

  > div {
    margin-left: 16px;

    span {
      color: #4F8D71;

      font-size: 14px;
    }

    color: #5BA885;

    display: flex;
    
    flex-direction: column;
  }
`;
export const OptionsContainer = styled.div`
  margin-top: 48px;

  > div + div {
    margin-top: 32px;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;

  font-weight: ${props => props.active ? 700 : 400};
  
  &:hover {
    cursor: pointer;

    > svg {
      fill: #5BA885;
    }

    > span {
      color: #5BA885;
    }
  }

  > svg {
    fill: ${props => props.active ? '#5BA885' : '#6F6F6F'};
  
    transition: 0.25s ease;
  }

  > span {
    margin-left: 8px;

    transition: 0.25s ease;

    color: ${props => props.active ? '#5BA885' : '#6F6F6F'};
  }
`;

export const Divider = styled.div`
  background-color: #E1E1E1;


  width: 100%;
  height: 1px;

  margin: 32px auto;
`;