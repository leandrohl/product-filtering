import React, { useEffect, useState } from 'react';
import Product from '../../components/Product';
import Checkbox from '../../components/Checkbox';
import { products as productsData } from '../../Products/data'
import { ICategory, IProduct } from '../../Products/types';

import * as S from './styles';
import Filter from '../../components/Filter';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [categories, setCategories] = useState<ICategory[]>([])

  useEffect(() => {
    searchProducts()
    searchCategories()
  }, [])

  const searchCategories = () => {
    const response: IProduct[] = productsData.data.nodes
    if (response) {
      const categoriesData = response.map(product => product.category)

      const categoriesFilter: ICategory[] = Array.from(new Set(categoriesData.map(c => c._id)))
        .map(id => { 
          return {
            _id: id,
            name: categoriesData.find(c => c._id === id )?.name
          }
        })
      setCategories(categoriesFilter)
    }
  }

  const searchProducts = (filter?: ICategory[]) => {
    const response: IProduct[] = productsData.data.nodes
    if (response) {
      let productsData: IProduct[] = response

      // if (filter && filter.find(category => category.selected)) {
      //   productsData = response.filter(product => filter.find(c => c.selected && c._id === product.category._id))
      // }

      setProducts(productsData)
    }
  }


  return (
    <S.Container>
      <S.ContainerFilter>
        <Filter 
          categories={categories}
        />
      </S.ContainerFilter>
      <S.ContainerProducts>
        <h2> Produtos </h2>
        <S.Products>
          { products.map(product => {
              const { id, name, category, images, shortDescription} = product
              return (
                <Product
                  key={id}
                  title={name}
                  image={images[0]}
                  category={category}
                  subTitle={shortDescription}
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