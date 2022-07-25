import React, { useEffect, useState } from 'react';
import Product from '../../components/Product';
import Checkbox from '../../components/Checkbox';
import data from '../../services/products.json'
import { IProduct } from '../../services/types';

import * as S from './styles';
import { Category } from './types';

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    searchProducts()
    searchCategories()
  }, [])

  const searchCategories = () => {
    const response: IProduct[] = data.data.nodes
    if (response) {
      const categoriesData = response.map(product => product.category)

      const categoriesFilter: Category[] = Array.from(new Set(categoriesData.map(c => c._id)))
        .map(id => { 
          return {
            _id: id,
            name: categoriesData.find(c => c._id === id )?.name,
            selected: false
          }
        })
      setCategories(categoriesFilter)
    }
  }

  const searchProducts = (filter?: Category[]) => {
    const response: IProduct[] = data.data.nodes
    if (response) {
      let productsData: IProduct[] = response

      if (filter && filter.find(category => category.selected)) {
        productsData = response.filter(product => filter.find(c => c.selected && c._id === product.category._id))
      }

      setProducts(productsData)
    }
  }

  const handleCategoryFilter = (position: number) => {
    const updatedCategories = categories.map((category, index) => {
        if (index === position) category.selected = !category.selected
        return category
      }
    );

    searchProducts(updatedCategories)
    setCategories(updatedCategories);
  }


  return (
    <S.Container>
      <S.Filter>
        <h2> Categorias </h2>
        { categories.map((category, index) => 
            <Checkbox 
              key={category._id}
              name={category._id}
              label={category.name}
              checked={categories[index].selected}
              onChange={() => handleCategoryFilter(index)}
            /> 
          )
        }
      </S.Filter>
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

export default Products;