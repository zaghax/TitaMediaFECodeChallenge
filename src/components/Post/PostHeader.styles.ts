import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-bottom: 8px;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
  }

  p {
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    cursor: pointer;
  }
`
