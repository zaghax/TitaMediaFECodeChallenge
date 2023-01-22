import styled from 'styled-components'

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

    &:after,
    &:before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 2px;
      background: white;
      position: absolute;
      top: 50%;
      left: 50%;
    }
    &:after {
      transform-origin: center center;
      transform: rotate(-45deg);
    }
    &:before {
      transform-origin: center center;
      transform: rotate(45deg);
    }
  }
`

export const ModalOverlayWrapper = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.colorWhite};
  width: 90%;
  max-width: 800px;
  height: auto;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  overflow: hidden;
`
