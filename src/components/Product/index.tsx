import React from 'react';
import { ICategory, IImage } from '../../Products/types';

import * as S from './styles';

interface ICardProps {
  title: string;
  subTitle: string;
  category: ICategory;
  image: IImage;
  action?: () => void;
}

const Product: React.FC<ICardProps> = (props: ICardProps) =>  {
  const { title, image, action, subTitle, category } = props
  return (
    <S.Card onClick={action}>
      <S.Image src={image.asset.url} alt={image.alt}>
      </S.Image>
      <S.Content>
        <S.Title>{title}</S.Title>
        <p> {subTitle} </p>
        <S.Category>
          {category.name}
        </S.Category>
      </S.Content>
    </S.Card>
  );
}

export default Product;