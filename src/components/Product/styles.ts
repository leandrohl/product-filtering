import styled from 'styled-components'

export const Card = styled.section(({ theme }) => `
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
    flex-direction: column;
    padding: 10px;
    font-size: 16px;
    align-items: center;
  }
  
`);

export const Image = styled.img`
  max-width: 160px;
  object-fit: cover;

  @media (max-width: 800px) {
    max-width: 300px;
  }
`

export const Content = styled.div`
  max-width: 200px;
  padding-left: 16px; 

  span  {
    font-size: 14px;
    font-weight: 600;
  }
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 12px;
`

export const ContainerCategory = styled.div(({ theme }) => `
  background: ${theme.primary};
  color: ${theme.white};

  margin-top: 16px;

  width: max-content;
  padding: 4px 16px;
  border-radius: 16px;
  font-size: 14px;

`);