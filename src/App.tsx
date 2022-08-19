import React from 'react';
import { ThemeProvider } from 'styled-components';
import ProductList from './pages/ProductList';
import GlobalStyle from './styles/global';
import Theme from './styles/theme';
import { products } from './data';
import { ICategory } from './data/types';
import Header from './components/Header';

const App: React.FC = () => {
  const categories = products.data.nodes.map(product => product.category)

  const categoriesFiltered: ICategory[] = Array.from(new Set(categories.map(c => c._id)))
  .map(id => { 
    return {
      _id: id,
      name: categories.find(c => c._id === id )?.name
    }
  })
  
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <ProductList products={products.data.nodes} categories={categoriesFiltered}/>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
