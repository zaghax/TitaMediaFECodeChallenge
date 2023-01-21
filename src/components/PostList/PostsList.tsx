import React, {useEffect, useState} from 'react';
import Post from '../Post/Post';
import useHttp from '../../utils/hooks/useHttp';
import { responseDataTypes } from '../../types/types';
import { PostContainer } from './PostList.styles'

const PostList = () => {
    const {response, isLoading, error} = useHttp('post');

    const [dataResponse, setDataReponse] = useState<responseDataTypes>();
    const posts = dataResponse?.data;

    useEffect(() => {
        setDataReponse(response);
        console.log(response);
    },[response])

    return (
        <PostContainer>
            {!isLoading && !error && (
                <>
                    <h1>Hi Test {dataResponse?.data?.length}</h1>
                    {posts?.map(post => <Post key={post.id} data={post}/>)}
                </>)
            }
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Upps, Something went wrong: {error}</h1>}
        </PostContainer>
    );
}

export default PostList;