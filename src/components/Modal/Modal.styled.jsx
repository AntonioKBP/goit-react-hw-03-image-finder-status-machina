import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  max-width: calc(100vw - 128px);
  max-height: calc(100vh - 64px);
`;

export const ModalImage = styled.img`
  max-width: 800px;
  max-height: 600px;
  border-radius: 4px;
`;

export const ModalBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 16px;
  right: 32px;
  border: none;
  background: transparent;
  width: 64px;
  height: 64px;
  cursor: pointer;
  transition: all 250ms;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
