import React, { InputHTMLAttributes } from 'react';

import * as S from './styles';

interface ICheckBoxProps extends InputHTMLAttributes<HTMLInputElement>{
  label?: string;
}

const Checkbox: React.FC<ICheckBoxProps> = (props: ICheckBoxProps) => {
  const { label, name, checked, onChange } = props
  return <S.Container>
    <input 
      type='checkbox'  
      name={name}
      checked={checked}
      onChange={onChange}
    /> 
    <span>{label}</span>
  </S.Container>;
}

export default Checkbox;