import React, { useState } from 'react';
import useMobile from '../../hooks/useMobile';
import { ICategory } from '../../Products/types';
import Checkbox from '../Checkbox';
import Modal from '../Modal';

import * as S from './styles';

interface IFilterProps {
  categories: ICategory[]
  categoriesSelected: string[]
  handleCategoriesSelected: (id: string) => void
  clearFilter: () => void
}

const Filter: React.FC<IFilterProps> = ({ categories, categoriesSelected, handleCategoriesSelected, clearFilter }: IFilterProps) => {  
  const [openModalFilter, setOpenModalFilter] = useState(false)
  const { isMobile } = useMobile()

  const filterTitle = 'Categorías'

  return isMobile
  ? (
      <S.ContainerMobile>
        <S.Button onClick={() => setOpenModalFilter(true)}>
          Filtrar
        </S.Button>
        <S.Button onClick={clearFilter}>
          Limpar filtro
        </S.Button>
        <Modal 
          title={filterTitle}
          open={openModalFilter}
          closeModal={() => setOpenModalFilter(false)}
        >
          <S.ContainerFilter>
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
          </S.ContainerFilter>
        </Modal>
      </S.ContainerMobile>
  ) : (
    <S.ContainerFilter>
      <h2> {filterTitle} </h2>
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
    </S.ContainerFilter>
  )
}

export default Filter;