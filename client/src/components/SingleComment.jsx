import axios from "axios";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { format } from "timeago.js";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
const Container = styled.div`
  display: flex;
  gap: 1rem;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
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
  border-radius: 50%;
  object-fit: cover;
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  cursor: pointer;
  padding: 0.2rem 0.8rem;
  background-color: transparent;
  border: none;
  color: #3ea6ff;
`;
const SingleComment = ({ prop, setCommentUpdated }) => {
  const [User, setUser] = useState(null);
  const currentUser = useSelector((state) => state.user);
  const handlecommentDelete = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8800/api/v1/comment/${prop._id}`,
        {
          headers: {
            authorization: "Bearer " + currentUser.currentuser?.accesstoken,
          },
        }
      );
      console.log(res.data);
      setCommentUpdated(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getsinglecommentUser = async () => {
      const res_user = await axios.get(
        `http://localhost:8800/api/v1/user/find/${prop.userId}`
      );
      // console.log("the user info of the video", res_user.data);

      setUser(res_user.data);
    };
    getsinglecommentUser();
  }, []);
  return (
    <Wrapper>
      <Container>
        <ChannelImage src={User?.img} />
        <ChannelComment>
          <CommentInfo>
            <ChannelName>{User?.name}</ChannelName>
            <InfoC>{format(prop.createdAt)}</InfoC>
          </CommentInfo>

          <Info>{prop.desc}</Info>
        </ChannelComment>
      </Container>
      {prop.userId === currentUser.currentuser?.userWithoutPassword?._id ? (
        <Button onClick={() => handlecommentDelete()}>
          <DeleteIcon />
        </Button>
      ) : null}
    </Wrapper>
  );
};

export default SingleComment;
