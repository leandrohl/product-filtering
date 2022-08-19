import React, { useState } from 'react';
import { ICategory } from '../../Products/types';
import Checkbox from '../Checkbox';

import * as S from './styles';

interface IFilterProps {
  categories: ICategory[]
}

const Filter: React.FC<IFilterProps> = ({ categories }: IFilterProps) => {
  const [categoriesSelected, setCategoriesSelected] = useState<ICategory[]>([])
  
  const handleCategoryFilter = (id: string) => {

  }

  return (
    <S.Container>
      <h2> Categorias </h2>
      {categories.map((category, index) => 
        <Checkbox 
          key={category._id}
          name={category._id}
          label={category.name}
          checked={true}
          onChange={() => handleCategoryFilter(category._id)}
        /> 
        )
      }
    </S.Container>
        
  );
}

export default Filter;