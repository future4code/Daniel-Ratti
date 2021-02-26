import React from "react";
import { goToPostPage } from "../Router/Coordinator";
import LikeButton from "./LikeButton";
import styled from "styled-components";

const MainContainer = styled.div`
  &:hover {
    border: 1px solid black;
    cursor: pointer;
  }
`;

const PostCard = (props) => {
  const {
    title,
    text,
    username,
    likes,
    comments,
    liked,
    id,
    updatePosts,
    history,
  } = props;

  return (
    <MainContainer
      onClick={() => {
        goToPostPage(history, id);
      }}
    >
      <h3>{title}</h3>
      <h4>Posted by u/{username}</h4>
      <p>{text}</p>
      <h5>Curtidas: {likes}</h5>
      <LikeButton urlEnd={`${id}/vote`} liked={liked} update={updatePosts} />
      <h5>Comentários:{comments}</h5>
    </MainContainer>
  );
};

export default PostCard;
