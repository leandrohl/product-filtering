import React from 'react';
import { ICategory, IImage } from '../../data/types';

import * as S from './styles';

interface ICardProps {
  title: string;
  subTitle: string;
  category: ICategory;
  images: IImage[];
  action?: () => void;
}

function Product(props: ICardProps){
  const { title, images, action, subTitle, category } = props
  return (
    <S.Card onClick={action}>
      { images.map((image, index) => (
          <S.Image
          key={index}
          src={image.asset.url} 
          alt={image.alt} />
        ))
      }
      <S.Content>
        <S.Title>{title}</S.Title>
        <span> {subTitle} </span>
        <S.ContainerCategory>
          {category.name}
        </S.ContainerCategory>
      </S.Content>
    </S.Card>
  );
}

export default Product;