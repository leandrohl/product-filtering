import React, { InputHTMLAttributes } from 'react';

import * as S from './styles';

interface ICheckBoxProps extends InputHTMLAttributes<HTMLInputElement>{
  label?: string;
}

const Checkbox: React.FC<ICheckBoxProps> = (props: ICheckBoxProps) => {
  const { label, id, checked, onChange } = props
  return <S.Container>
    <input 
      type='checkbox'  
      name={id}
      checked={checked}
      onChange={onChange}
    /> 
    <label>{label}</label>
  </S.Container>;
}

export default Checkbox;