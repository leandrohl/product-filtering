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
      id={name} 
      name={name}
      checked={checked}
      onChange={onChange}
    /> 
    <label htmlFor={name}>{label}</label>
  </S.Container>;
}

export default Checkbox;