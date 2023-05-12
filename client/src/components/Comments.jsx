import React from "react";
import { styled } from "styled-components";
import img from "../img/photo.png";
import img2 from "../img/photo2.png";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
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
const Comments = () => {
  return (
    <Container>
      <Title>Comments</Title>
      <Wrapper>
        <ChannelImage src={img2} />
        <Input></Input>
      </Wrapper>
      <Wrapper>
        <ChannelImage src={img2} />
        <ChannelComment>
          <CommentInfo>
            <ChannelName>Prathamxsi</ChannelName>
            <InfoC>1 day ago</InfoC>
          </CommentInfo>

          <Info>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            error porro illo, ratione, neque aliquam quod similique esse facere
            iusto exercitationem recusandae ab inventore laboriosam. Sequi natus
            quos suscipit repellendus?
          </Info>
        </ChannelComment>
      </Wrapper>
      <Wrapper>
        <ChannelImage src={img2} />
        <ChannelComment>
          <CommentInfo>
            <ChannelName>Prathamxsi</ChannelName>
            <InfoC>1 day ago</InfoC>
          </CommentInfo>
          <Info>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            error porro illo, ratione, neque aliquam quod similique esse facere
            iusto exercitationem recusandae ab inventore laboriosam. Sequi natus
            quos suscipit repellendus?
          </Info>
        </ChannelComment>
      </Wrapper>
      <Wrapper>
        <ChannelImage src={img2} />
        <ChannelComment>
          <CommentInfo>
            <ChannelName>Prathamxsi</ChannelName>
            <InfoC>1 day ago</InfoC>
          </CommentInfo>
          <Info>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            error porro illo, ratione, neque aliquam quod similique esse facere
            iusto exercitationem recusandae ab inventore laboriosam. Sequi natus
            quos suscipit repellendus?
          </Info>
        </ChannelComment>
      </Wrapper>
    </Container>
  );
};

export default Comments;
