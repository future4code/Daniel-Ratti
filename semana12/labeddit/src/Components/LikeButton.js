import React from 'react'
import useToken from '../Hooks/UseToken'
import useVote from '../Hooks/UseVote'

const LikeButton = ({urlEnd, liked, update}) => {
    const token = useToken()
    const vote = useVote(urlEnd, token)

    const onClickVote = (rate) => {
        vote(rate, update)
    }

    return (
        <div>
        {liked === 0 ?
            <>
                <button
                    onClick={() => onClickVote(1)}
                >Like</button>
                <button
                    onClick={() => onClickVote(-1)}
                >Dislike</button>
            </>
            : (liked === 1 ?
                <>
                    <button
                        onClick={() => onClickVote(0)}
                    >Like</button>
                    <button
                        onClick={() => onClickVote(-1)}
                    >Dislike</button>
                </>
                :
                <>
                    <button
                        onClick={() => onClickVote(1)}
                    >Like</button>
                    <button
                        onClick={() => onClickVote(0)}
                    >Dislike</button>
                </>)
        }
        </div>
    )
}

export default LikeButton