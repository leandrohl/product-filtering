import styled from 'styled-components'

export const Card = styled.section(({ theme }) => `
  display: flex;  

  border: 1px solid ${theme.gray2};
  box-shadow: ${theme.shadow};

  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  padding: 20px 12px;

  &:hover {
    box-shadow: ${theme.shadow3};
  }

  @media (max-width: 1000px) {
    align-items: center;
    flex-direction: column;
  }
`);

export const Image = styled.img`
  max-width: 140px;
  object-fit: cover;

  @media (max-width: 800px) {
    max-width: 200px
  }
`

export const Content = styled.div`
  padding-left: 16px; 

  span  {
    font-size: 14px;
    font-weight: 600;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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