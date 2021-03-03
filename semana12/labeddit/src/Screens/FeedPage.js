import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import LogoutButton from "../Components/LogoutButton";
import PostCard from "../Components/PostCard";
import LoggedContext from "../Context/LoggedContext";
import useCreateData from "../Hooks/UseCreateData";
import useToken from "../Hooks/UseToken";
import useForm from "../Hooks/UseForm";
import useRequestData from "../Hooks/UseRequestData";
import useRequireLogin from "../Hooks/useRequireLogin";

const FeedPage = () => {
  const { logged, setLogged } = useContext(LoggedContext);
  useRequireLogin(logged, setLogged);
  const history = useHistory();
  const token = useToken();
  const [{ posts }, updatePosts] = useRequestData("posts", token);
  const createPost = useCreateData(token);
  const [form, onChange, resetForm] = useForm({
    title: "",
    text: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const onClickCreatePost = (event) => {
    event.preventDefault();
    createPost("posts", form, updatePosts);
    resetForm();
  };

  return (
    <div>
      <LogoutButton history={history} />
      <div>
        <form onSubmit={onClickCreatePost}>
          <h1>{"Postar:"}</h1>
          <label>Título: </label>
          <input
            name="title"
            value={form.title}
            type="text"
            required
            onChange={handleInput}
          />
          <br />
          <label>Texto: </label>
          <input
            name="text"
            value={form.text}
            type="text"
            required
            onChange={handleInput}
          />
          <br />
          <button type="submit">Criar!</button>
        </form>
      </div>
      <br />
      {posts &&
        posts
          .sort((a, b) => {
            return b.createdAt - a.createdAt;
          })
          .map((post, index) => {
            if (index < 20) {
              return (
                <PostCard
                  key={post.id}
                  text={post.text}
                  title={post.title}
                  username={post.username}
                  likes={post.votesCount}
                  comments={post.commentsCount}
                  liked={post.userVoteDirection}
                  id={post.id}
                  updatePosts={updatePosts}
                  history={history}
                />
              );
            } else {
              return null;
            }
          })}
    </div>
  );
};

export default FeedPage;
