import styled from 'styled-components'

export const UserModalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
`
export const ModalHeader = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.2) 40%,
    rgba(255, 255, 255, 0) 40%,
    rgba(0, 0, 0, 0) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.2) 40%,
    rgba(255, 255, 255, 0) 40%,
    rgba(0, 0, 0, 0) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.2) 40%,
    rgba(255, 255, 255, 0) 40%,
    rgba(0, 0, 0, 0) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#33000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */

  img {
    width: 100%;
    max-width: 150px;
    display: block;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.colorDarkGray};
    margin-bottom: 20px;
  }
  h1 {
    margin: 0;
    position: relative;
    &:after {
      content: '';
      width: 60%;
      position: absolute;
      bottom: -10px;
      left: 20%;
      border-bottom: 1px solid ${({ theme }) => theme.colors.colorDarkGray};;
    }
  }
`

export const ModalContent = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
    line-height: 200%;
  }
`
