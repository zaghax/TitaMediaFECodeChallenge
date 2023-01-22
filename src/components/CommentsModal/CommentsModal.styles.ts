import styled from 'styled-components';

export const CommentsModalWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
`

export const ModalWrapperLeft = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    img {
        width: 100%;
        display: block;
    }
`

export const ModalWrapperRight = styled.div`
    width: 60%;
    padding: 16px;
    display: flex;
    flex-direction: column;
`

export const ModalHeader = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 8px;

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 10px;
    }

    p {
        margin: 0;
        font-size: 14px;
        font-weight: 700;
        line-height: 14px;
    }
`

export const ModalFooter = styled.div`
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

export const ModalContent = styled.div`
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    min-height: 200px;
    p {
        margin: 0;
        line-height: 24px;
    }
`
