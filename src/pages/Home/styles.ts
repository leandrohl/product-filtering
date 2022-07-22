import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100%;

  padding: 28px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Filter = styled.nav`
  margin-bottom: 16px;

  display: flex;
  flex-direction: column;
  width: 15%;

  > h2 {
    font-weight: 600;
    color: ${props => props.theme.primary}
  }

  > form {
    padding: 16px 0;
  }

  @media (max-width: 600px) {
    width: 80%;
  }
`

export const Products = styled.section`
  display: flex;
  justify-content: center;
  width: 85%;
  flex-wrap: wrap;
`