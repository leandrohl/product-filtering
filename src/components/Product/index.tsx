import React from 'react';
import { ICategory, IImage } from '../../products/types';

import * as S from './styles';

interface ICardProps {
  title: string;
  subTitle: string;
  category: ICategory;
  image: IImage;
  action?: () => void;
}

function Product(props: ICardProps){
  const { title, image, action, subTitle, category } = props
  return (
    <S.Card onClick={action}>
      <S.Image src={image.asset.url} alt={image.alt} />
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