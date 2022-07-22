import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import data from '../../services/data.json'
import { IProduct } from '../../services/types';

import * as S from './styles';

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    searchProducts()
  }, [])

  const searchProducts = () => {
    const response: IProduct[] = data.data.nodes
    if (response) {
      setProducts(response)
    } else {

    }
  }


  return (
    <S.Container>
      <S.Title>
        Listagem de produtos
      </S.Title>
      {
        products.map(product => {
          return (
            <Card
              key={product.id}
              title={product.name}
              action={() => {}}
              icon={product.name}
            />
          )
        })
      }
    </S.Container>
  );
}

export default Home;