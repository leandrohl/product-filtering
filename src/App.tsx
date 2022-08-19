import React from 'react';
import { ThemeProvider } from 'styled-components';
import ProductList from './pages/ProductList';
import GlobalStyle from './styles/global';
import Theme from './styles/theme';
import { products as productsData} from './products/data';
import { ICategory } from './products/types';
import Header from './components/Header';

const App: React.FC = () => {
  const products = productsData.data.nodes

  const categories: ICategory[] = Array.from(new Set(products.map(product => product.category).map(c => c._id)))
  .map(id => { 
    return {
      _id: id,
      name: products.map(product => product.category).find(c => c._id === id )?.name
    }
  })
  
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <ProductList products={products} categories={categories}/>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
