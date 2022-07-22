import React, { ChangeEventHandler, SyntheticEvent, useEffect, useState } from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Checkbox from '../../components/Checkbox';
import data from '../../services/products.json'
import { ICategory, IProduct } from '../../services/types';

import * as S from './styles';
import { ICategoryFilter } from './types';

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [categories, setCategories] = useState<ICategoryFilter[]>([])
  // const [categoriesSelected, setCategoriesSelected] = useState<ICategoryFilter[]>([])

  useEffect(() => {
    searchProducts()
  }, [])

  useEffect(() => {
    console.log(categories)
  }, [categories])


  const searchProducts = () => {
    const response: IProduct[] = data.data.nodes
    if (response) {
      setProducts(response)

      const categories = response.map(product => product.category)

      const categoriesFilter = Array.from(new Set(categories.map(c => c._id)))
        .map(id => { 
          return {
            _id: id,
            name: categories.find(c => c._id === id )?.name,
            selected: false
          }
        })

      setCategories(categoriesFilter)
    }
  }

  const handleChangeCheckBox =  (event: ChangeEventHandler<HTMLInputElement>) => {
    console.log(event)
    // setCategories([
    //   ...categories,
    //   [name]: ve
    // ])
  }


  return (
    <S.Container>
      <S.Filter>

        <form>
          { categories.map(category => 
              <Checkbox 
                key={category._id}
                id={category._id}
                label={category.name}
                checked={category.selected}
              /> 
          )
          }
        </form>
        <Button action={() => {}}> Filtrar </Button>
      </S.Filter>
      <S.Products>
        { products.map(product => {
            const { id, name, category, images, shortDescription} = product
            return (
              <Card
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
      
    </S.Container>
  );
}

export default Home;