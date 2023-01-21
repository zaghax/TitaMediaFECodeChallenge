import { TagWrapper } from './Tag.styles';

interface propTypes {
    data: string
}

const Tag = ({data}:propTypes) => {

    return (
        <>
            <TagWrapper>{data} </TagWrapper>
        </>
    )

}

export default Tag;