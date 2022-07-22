import styled from 'styled-components'

export const Card = styled.div(({ theme }) => `
  width: 700px;
  display: flex;
  border: 1px solid ${theme.gray2};
  box-shadow: ${theme.shadow};
  padding: 20px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  margin: 10px;

  &:hover {
    box-shadow: ${theme.shadow3};
  }

  @media (max-width: 800px) {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    > p {
      font-size: 14px;
    }
  }
  
`);

export const Image = styled.img`
  width: 200px;
`

export const Content = styled.div`
  max-width: 400px;
  padding-left: 16px; 
  
`

export const Title = styled.h2`
  font-weight: 500px;
  font-size: 16px;
  margin-bottom: 12px;
`

export const Category = styled.div(({ theme }) => `
  background: ${theme.primary};
  color: ${theme.white};

  margin-top: 16px;

  width: max-content;
  padding: 4px 16px;
  border-radius: 16px;
  font-size: 14px;


`);