import React from 'react';

import * as S from './styles';
import TBBLogo from '../../assets/brooklyn-brothers-logo.png'

const Header: React.FC = () => {
  return (
    <S.Container>
      <img src={TBBLogo} alt="logo-tbb" />
    </S.Container>
  );
}

export default Header;