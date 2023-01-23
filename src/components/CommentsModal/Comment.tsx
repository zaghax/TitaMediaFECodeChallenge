import { responseDataArrayTypes } from '../../types/types'

interface commentPropTypes {
  commentData: responseDataArrayTypes
}

const Comment = ({ commentData }: commentPropTypes) => {
  return (
    <li>
      <p>
        <strong>{commentData.owner?.firstName}</strong>: {commentData.message}
      </p>
    </li>
  )
}

export default Comment
