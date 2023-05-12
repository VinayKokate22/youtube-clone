import React from "react";
import { styled } from "styled-components";
import img from "../img/photo.png";
import img2 from "../img/photo2.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Comments from "../components/Comments";
import Card from "../components/Card";
const Container = styled.div`
  display: flex;
  gap: 1.5rem;
`;
const Content = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
const ChannelImage = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;
const VideoWrapper = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
`;
const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;
const Info = styled.div`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.soft};
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 0.6rem;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  border-radius: 1rem;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.soft};
  border: none;
  gap: 0.5rem;
  padding: 0.3rem 1rem;
  border-radius: 1rem;

  color: ${({ theme }) => theme.text};
  cursor: pointer;
  &:hover {
    background-color: #6e6e6e;
  }
`;
const SubButton = styled.button`
  background-color: ${({ theme }) => theme.text};
  border: none;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.bg};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.textSoft};
  }
`;
const Recommended = styled.div`
  flex: 2;
`;
const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper src={img}></VideoWrapper>
        <Title>
          React social media app design dark/light mode & responsive & html
        </Title>
        <Details>
          {/* <Info>125K views 1 year ago</Info> */}
          <ChannelDetails>
            <ChannelImage src={img2} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
              }}
            >
              <ChannelName>VinayDev</ChannelName>
              <p style={{ color: "#868686", fontSize: "14px" }}>
                187k Subscribers
              </p>
            </div>
            <SubButton>Subscribe</SubButton>
          </ChannelDetails>

          <Buttons>
            <Button>
              <ThumbUpIcon />
              123
            </Button>
            <Button>
              <ThumbDownIcon />
              123
            </Button>
            <Button>
              <ShareIcon />
              Share
            </Button>
            <Button>
              <SaveAltIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Info>
          65,100 views May 10, 2023 <br /> <br /> T React social media app
          design dark/light mode & responsive & html
        </Info>
        <Comments />
      </Content>

      <Recommended>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommended>
    </Container>
  );
};

export default Video;
