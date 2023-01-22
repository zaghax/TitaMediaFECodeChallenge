import { commentDataTypes } from '../../types/types'

interface commentPropTypes {
  commentData: commentDataTypes
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
