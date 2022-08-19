import React from 'react';
import { ICategory } from '../../Products/types';
import Checkbox from '../Checkbox';

import * as S from './styles';

interface IFilterProps {
  categories: ICategory[]
  categoriesSelected: string[]
  handleCategoriesSelected: (id: string) => void
}

const Filter: React.FC<IFilterProps> = ({ categories, categoriesSelected, handleCategoriesSelected }: IFilterProps) => {  
  return (
    <S.Container>
      <h2> Categorias </h2>
      {categories.map((category) => 
        <Checkbox 
          key={category._id}
          name={category._id}
          label={category.name}
          checked={!!categoriesSelected.find(id => id === category._id)}
          onChange={() => handleCategoriesSelected(category._id)}
        /> 
        )
      }
    </S.Container>
        
  );
}

export default Filter;