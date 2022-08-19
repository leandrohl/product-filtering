import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100%;

  padding: 28px;

  h2 {
    font-weight: 600;
    color: ${props => props.theme.primary};
    padding-bottom: 8px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContainerFilter = styled.form`
  margin-bottom: 16px;

  display: flex;
  flex-direction: column;
  width: 25%;

  @media (max-width: 800px) {
    width: 100%;
  }
`

export const ContainerProducts = styled.div`
  width: 75%;

  @media (max-width: 800px) {
    width: 100%;
  }
`

export const Products = styled.section`
  display: flex;
  flex-wrap: wrap;
`

