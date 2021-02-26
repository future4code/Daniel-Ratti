import React, { useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import LikeButton from '../Components/LikeButton'
import LogoutButton from '../Components/LogoutButton'
import LoggedContext from '../Context/LoggedContext'
import useCreateData from '../Hooks/UseCreateData'
import useToken from '../Hooks/UseToken'
import useForm from '../Hooks/UseForm'
import useRequestData from '../Hooks/UseRequestData'
import useRequireLogin from '../Hooks/useRequireLogin'
import { goToFeedPage } from '../Router/Coordinator'

const PostPage = () => {
    const { logged, setLogged } = useContext(LoggedContext)
    useRequireLogin(logged, setLogged)

    const token = useToken()
    const history = useHistory()
    const postId = useParams().postId

    const [form, onChange, resetForm] = useForm({ text: "" })
    const [{ post }, updatePostDetails] = useRequestData(`posts/${postId}`, token)

    const createComment = useCreateData(token)

    const handleInput = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const onClickComment = (event) => {
        event.preventDefault()
        createComment(`posts/${postId}/comment`, form, updatePostDetails)
        resetForm()
    }

    return (
        <div>
            <button onClick={() => { goToFeedPage(history) }}>Voltar</button>
            <LogoutButton history={history} />

            {post &&
                <div>
                    <h1>{post.title}</h1>
                    <h2><em>por {post.username}</em></h2>
                    <p>{post.text}</p>
                </div>
            }
            <br />

            <div>
                <form onSubmit={onClickComment}>
                    <h3>Comente!</h3>
                    <label>Texto: </label>
                    <input
                        name="text"
                        value={form.text}
                        type="text"
                        required
                        onChange={handleInput}
                    />
                    <br />
                    <button type="submit">Comentar</button>
                </form>
            </div>
            <br />

            {(post && post.commentsCount) &&
                post.comments.sort((a, b) => {
                    return a.createdAt - b.createdAt
                }).map((comment) => {
                    return (
                        <div key={comment.id}>
                            <h4>{comment.username}</h4>
                            <p>{comment.text}</p>
                            <h5>Curtidas: {comment.votesCount}</h5>
                            <LikeButton
                                urlEnd={`${postId}/comment/${comment.id}/vote`}
                                liked={comment.userVoteDirection}
                                update={updatePostDetails}
                            />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default PostPage