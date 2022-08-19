import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  
  height: 100vh;

  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 16px;
  background-color: rgb(118 118 118 / 38%);

`;

export const Content = styled.div(({ theme }) => `
  padding: 20px;

  width: 100%;

  background-color: ${theme.white};
  box-shadow: ${theme.shadow};
  border-radius: 4px;
  height: max-content;
  overflow-y: scroll;
`);

export const Header = styled.header(({ theme }) => `
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 24px;

   > svg {
     cursor: pointer;
     font-size: 20px;
     &:hover {
       color: ${theme.secondary};
     }
   }
`);