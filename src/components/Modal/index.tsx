import React, { ReactElement } from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import * as S from './styles';

interface IModalProps {
  open: boolean;
  children: ReactElement,
  closeModal?(): void,
  title?: string,
}

function Modal ({ children, closeModal, title, open }: IModalProps) {
  return open ? (
    <S.Container>
      <S.Content>
        <S.Header>
          <h3>{title}</h3>
          {closeModal && (
            <AiOutlineClose aria-label="fechar modal" onClick={() => closeModal()} />
          )}
        </S.Header>
        {children}
      </S.Content>
  </S.Container>
  ) : <></>
}

export default Modal;