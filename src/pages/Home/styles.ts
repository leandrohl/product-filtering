import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 28px;
`

export const Filter = styled.nav`
  margin-bottom: 16px;

  display: flex;
  align-items: center;

  margin: 0 16px;

  > form {
    display: flex;
    padding: 0 16px;
    flex-wrap: wrap;
  }
`

export const Products = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`