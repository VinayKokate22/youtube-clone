import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import img from "../img/photo.png";
import img2 from "../img/photo2.png";
import axios from "axios";
import { format } from "timeago.js";
import SingleComment from "./SingleComment";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  padding: 0.5rem;
  width: 100%;
  &:focus {
    outline: 1px solid #3ea6ff;
  }
`;
const Title = styled.h2`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  font-weight: 400;
`;
const ChannelName = styled.h3`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.textSoft};
  font-weight: 400;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;
const Info = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  width: 80%;
`;
const InfoC = styled.div`
  color: ${({ theme }) => theme.textSoft};
  font-size: 0.875rem;
`;
const ChannelImage = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  border: none;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;
const ChannelComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const CommentInfo = styled.div`
  display: flex;

  gap: 0.5rem;
`;
const Button = styled.button`
  width: fit-content;
  cursor: pointer;
  padding: 0.2rem 0.8rem;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
`;
const Comments = ({ prop }) => {
  const currentUser = useSelector((state) => state.user);
  const [Comment, setComment] = useState(null);
  const [writeComment, setwriteComment] = useState(null);
  const [commentUpdated, setCommentUpdated] = useState(null);
  const data = useSelector((state) => state.user);
  const location = useLocation();
  const url = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );
  const handlecommentPost = async (e) => {
    try {
      const res = await axios.post(
        "http://localhost:8800/api/v1/comment",

        {
          videoId: prop,
          desc: writeComment,
        },
        {
          headers: {
            authorization: "Bearer " + data.currentuser?.accesstoken,
          },
        }
      );
      console.log("response of the comment", res.data);
      setCommentUpdated(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getcomment = async () => {
      const video_comment_res = await axios.get(
        `http://localhost:8800/api/v1/comment/${prop}`
      );
      setComment(video_comment_res.data.comment);
      console.log("the comment info ", video_comment_res.data.comment);
      console.log("the prop is ", prop);
    };
    getcomment();
  }, [commentUpdated, url]);
  return (
    <Container>
      <Title>Comments</Title>
      {currentUser.currentuser?.userWithoutPassword ? (
        <Wrapper>
          <ChannelImage src={currentUser.currentuser.userWithoutPassword.img} />
          <Input onChange={(e) => setwriteComment(e.target.value)}></Input>
          <Button onClick={() => handlecommentPost()}> Post </Button>
        </Wrapper>
      ) : null}

      {Comment?.map((comment) => {
        return (
          <SingleComment
            key={comment._id}
            prop={comment}
            setCommentUpdated={setCommentUpdated}
          />
        );
      })}
    </Container>
  );
};

export default Comments;
