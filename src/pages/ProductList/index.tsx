import React, { useState } from 'react';
import Product from '../../components/Product';
import { ICategory, IProduct } from '../../data/types';

import * as S from './styles';
import Filter from '../../components/Filter';

interface IProductListProps {
  products: IProduct[]
  categories: ICategory[]
}

function ProductList({ products, categories }: IProductListProps) {
  const [categoriesSelectedId, setCategoriesSelectedId] = useState<string[]>([])

  const productsFiltered = categoriesSelectedId.length > 0 ? 
    products.filter(product => categoriesSelectedId.includes(product.category._id))
    : []

  const handleCategoriesSelected = (categoryId: string) => {
    const isCategorySelected = categoriesSelectedId.includes(categoryId)

    if (isCategorySelected) {
      setCategoriesSelectedId(categoriesSelectedId.filter(id => id !== categoryId))
    } else {
      setCategoriesSelectedId([ ...categoriesSelectedId, categoryId])
    }
  }

  const clearFilter = () => {
    setCategoriesSelectedId([])
  }
    

  return (
    <S.Container>
      <Filter 
        categories={categories}
        categoriesSelected={categoriesSelectedId}
        handleCategoriesSelected={handleCategoriesSelected}
        clearFilter={clearFilter}
      />
      <S.ContainerProducts>
        <h1> Productos </h1>
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