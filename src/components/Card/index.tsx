import React from 'react';
import { ICategory, IImage } from '../../services/types';

import * as S from './styles';

interface ICardProps {
  title: string;
  subTitle: string;
  category: ICategory;
  image: IImage;
  action?: () => void;
}

const Card: React.FC<ICardProps> = (props: ICardProps) =>  {
  const { title, image, action, subTitle, category } = props
  return (
    <S.Card onClick={action}>
      {/* <img src={image.src} alt={image.alt}/> */}
      <S.Image>

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

export default Card;