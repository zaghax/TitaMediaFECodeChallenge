import styled, { keyframes } from 'styled-components'

export const BackdropWrapper = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.colorBlack80};
  width: 100vw;
  height: 100vh;
  z-index: 98;
  top: 0;
  left: 0;
  button {
    background: none;
    width: 32px;
    height: 32px;
    position: absolute;
    top: 20px;
    right: 50px;
    z-index: 100;
    font-size: 0;
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
    transform-origin: center;
    transition: 100ms ease-in;

    &:after,
    &:before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 2px;
      background: white;
      transform-origin: center;
      line-height: 32px;
      position: absolute;
      left: 0;
      top: 15px;
    }
    &:after {
      transform: rotate(-45deg);
    }
    &:before {
      transform: rotate(45deg);
    }
    &:hover {
      transform: rotate(90deg);
    }
  }
`

const slidedown = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`

export const ModalOverlayWrapper = styled.div<{ size?: string }>`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.colorWhite};
  width: 90%;
  max-width: ${({ size }) => (size === 'small' ? '370px' : '800px')};
  height: auto;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  overflow: hidden;
  animation: ${slidedown} 300ms ease-out forwards;
`
