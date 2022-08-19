import React, { useState } from 'react';
import Product from '../../components/Product';
import { ICategory, IProduct } from '../../Products/types';

import * as S from './styles';
import Filter from '../../components/Filter';

interface IProductListProps {
  products: IProduct[]
  categories: ICategory[]
}

function ProductList({ products, categories }: IProductListProps) {
  const [categoriesSelectedId, setCategoriesSelectedId] = useState<string[]>([])

  const productsFiltered = categoriesSelectedId.length > 0 ? 
    products.filter(product => categoriesSelectedId.find(categoryId => categoryId === product.category._id))
    : []

  const handleCategoriesSelected = (categoryId: string) => {
    const isCategorySelected = categoriesSelectedId.find(id => id === categoryId)

    if (isCategorySelected) {
      setCategoriesSelectedId(categoriesSelectedId.filter(id => id !== categoryId))
    } else {
      setCategoriesSelectedId([ ...categoriesSelectedId, categoryId])
    }
  }
    

  return (
    <S.Container>
      <S.ContainerFilter>
        <Filter 
          categories={categories}
          categoriesSelected={categoriesSelectedId}
          handleCategoriesSelected={handleCategoriesSelected}
        />
      </S.ContainerFilter>
      <S.ContainerProducts>
        <h2> Produtos </h2>
        <S.Products>
          {
            productsFiltered.length > 0
            ?
            productsFiltered.map(product => {
              return (
                <Product
                  key={product.id}
                  title={product.name}
                  image={product.images[0]}
                  category={product.category}
                  subTitle={product.shortDescription}
                />
              )
            })
            :
            products.map(product => {
              return (
                <Product
                  key={product.id}
                  title={product.name}
                  image={product.images[0]}
                  category={product.category}
                  subTitle={product.shortDescription}
                />
              )
            })
          }
        </S.Products>
      </S.ContainerProducts>
    </S.Container>
  );
}

export default ProductList;