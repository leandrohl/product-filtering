import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100%;

  padding: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding: 16px 16px;
  }
`

export const ContainerProducts = styled.section`
  margin-left: 40px;

  > h1 {
    text-align: center;
    font-weight: bold;
    color: ${props => props.theme.primary};
    margin-bottom: 16px;
  }


  @media (max-width: 800px) {
    width: 100%;
    margin-left: 0;
  }
`

export const Products = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;

  @media (max-width: 1200px){
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 800px){
    grid-template-columns: 1fr;
  }
`

