import styled from 'styled-components'

export const Button = styled.button`
  border: 0;
  padding: 8px 16px;
  border-radius: 16px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  font-size: 16px;
  transition: all .5s;
  

  &:hover, &:disabled {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};
  }
`;