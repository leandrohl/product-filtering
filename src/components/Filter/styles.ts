import styled from 'styled-components'

export const ContainerFilter = styled.div`
  display: flex;
  flex-direction: column;

  > h2 {
    font-weight: bold;
    color: ${props => props.theme.primary};
    margin-bottom: 20px;
  }
`


export const ContainerMobile = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 16px;
`


export const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  padding: 8px 16px;
  border-radius: 24px;
  font-size: 16px;

  margin-bottom: 16px;
`



