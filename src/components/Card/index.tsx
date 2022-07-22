import React from 'react';

import * as S from './styles';

interface ICardProps {
  title: string;
  icon: string;
  action: () => void;
}

const Card: React.FC<ICardProps> = (props: ICardProps) =>  {
  const { title, icon, action } = props
  return (
    <S.Card onClick={action}>
      {icon}
      <p>{title}</p>
    </S.Card>
  );
}

export default Card;