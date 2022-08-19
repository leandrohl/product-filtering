import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100%;

  padding: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContainerProducts = styled.section`
  margin-left: 40px;

  > h2 {
    text-align: center;
    font-weight: bold;
    color: ${props => props.theme.primary};
    margin-bottom: 8px;
  }


  @media (max-width: 800px) {
    width: 100%;
    margin-left: 0;
  }
`

export const Products = styled.section`
  display: flex;
  flex-wrap: wrap;
`

