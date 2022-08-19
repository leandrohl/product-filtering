import React from 'react';
import { ThemeProvider } from 'styled-components';
import Products from './pages/ProductList';
import GlobalStyle from './styles/global';
import Theme from './styles/theme';

const App: React.FC = () => {

  return (
    <ThemeProvider theme={Theme}>
      <Products />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
