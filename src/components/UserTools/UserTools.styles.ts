import styled from 'styled-components'

export const ToolsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  postition: relative;
`

export const ProfileActions = styled.div`
  cursor: pointer;

  button {
    position: absolute;
    right: 8px;
    top: 60px;
    visibility: hidden;
    opacity: 0;
    -webkit-appearance: none;
    border: none;
    border-radius: none;
    background-color: ${({ theme }) => theme.colors.colorLightGray};
    cursor: pointer;
    padding: 5px;
    transition: all 150ms ease-in;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 5px;
  }

  &:hover {
    button {
      visibility: visible;
      opacity: 1;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
`
