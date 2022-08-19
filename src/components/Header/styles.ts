import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.black};

  > img {
    height: 100px;
    object-fit: cover;
  }
`