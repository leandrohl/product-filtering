import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import GlobalStyle from './styles/global';
import Theme from './styles/theme';

const App: React.FC = () => {

  return (
    <ThemeProvider theme={Theme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
