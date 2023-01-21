import Tag from '../Tag/Tag';
import { postDataTypes } from '../../types/types';
import { PostWrapper, PostImage, PostHeader, PostFooter } from './Post.styles';

interface propTypes {
  data: postDataTypes
}

const Posts = ({ data }: propTypes) => {
  return <PostWrapper>
    <PostHeader>
        <img src={data.owner?.picture} alt={data.owner?.firstName}/>
        <p>{data.owner?.firstName} {data.owner?.lasName}</p>
    </PostHeader>
    <PostImage>
        <img src={data.image} alt={data.text}/>
    </PostImage>
    <PostFooter>
        <p><strong>{data.likes} Likes</strong></p>
        <p><strong>{data.owner?.firstName}</strong> {data.text}</p>
        <p className="tags">{data.tags?.map(tag => <Tag key={tag} data={tag}/>)}</p>
    </PostFooter>
    <hr role="separator"/>
    
  </PostWrapper>
}

export default Posts;
