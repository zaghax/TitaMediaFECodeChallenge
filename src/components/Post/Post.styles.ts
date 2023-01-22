import styled from 'styled-components'

export const PostWrapper = styled.div`
  width: 100%;
`

export const PostImage = styled.div`
  border: 1px solid rgb(219, 219, 219);
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    display: block;
  }
`

export const PostFooter = styled.div`
  padding: 10px 10px 0;

  p {
    margin: 0;
    font-size: 14px;
    line-height: 20px;
    strong {
      font-weight: 600;
    }
  }
`
export const PostComments = styled.p`
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.colorLightBlue};
  }
`
