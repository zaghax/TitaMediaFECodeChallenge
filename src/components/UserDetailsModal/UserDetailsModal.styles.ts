import styled from 'styled-components';

export const UserModalWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
`

export const ModalWrapperLeft = styled.div`
    width: 30%;
    display: flex;
    align-items: flex-start;
    justify-content: center; 
    padding-top: 20px;
    img {
        width: 100%;
        max-width: 150px;
        display: block;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.colorDarkGray};
    }
`

export const ModalWrapperRight = styled.div`
    width: 70%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    h1 {
        margin: 0
    }
    p {
        margin: 0;
        line-height: 200%
    }

`

