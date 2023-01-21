import styled from 'styled-components'

export const TagWrapper = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.colorLightBlue};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.colorDarkerGray};
  }
`
