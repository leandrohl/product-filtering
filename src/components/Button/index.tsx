import React from 'react';

import * as S from './styles';

interface IButtonProps {
  children: React.ReactNode;
  action: () => void;
  loading?: boolean;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  const {action, children, loading} = props
  return (
    <S.Button onClick={action}>
      {loading ? <></> : children}
    </S.Button>
  )
}

export default Button;