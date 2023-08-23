import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import img from "../img/photo.png";
import { format } from "timeago.js";
import img2 from "../img/photo2.png";
import { Link } from "react-router-dom";
import axios from "axios";
const Container = styled.div`
  width: ${(prop) => (prop.type === "sm" ? "19.4rem" : "22.7rem")};
  height: ${(prop) => (prop.type === "sm" ? "7rem" : "20rem")};
  background-color: transparent;
  display: flex;
  flex-direction: ${(prop) => (prop.type === "sm" ? "row" : "column")};
  gap: 1rem;
`;
const Details = styled.div`
  width: ${(prop) => prop.type === "sm" && "9rem"};
  display: flex;
  gap: 0.5rem;
`;
const ChannelImage = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
const Title = styled.h2`
  font-size: ${(prop) => (prop.type === "sm" ? "0.8rem" : "1rem")};
  text-transform: capitalize;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h3`
  font-size: ${(prop) => (prop.type === "sm" ? "0.8rem" : "0.875rem")};
  color: ${({ theme }) => theme.textSoft};
  font-weight: 400;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;
const Info = styled.div`
  font-size: ${(prop) => (prop.type === "sm" ? "0.78rem" : "0.875rem")};
  color: ${({ theme }) => theme.textSoft};
  font-weight: 400;
`;
const Img = styled.img`
  width: ${(prop) => (prop.type === "sm" ? "10rem" : "22.7rem")};
  height: ${(prop) => (prop.type === "sm" ? "6rem" : "13rem")};

  border-radius: 0.8rem;
  border: none;
  outline: none;
  transition: ease-in-out 0.3s;
  object-fit: cover;

  &:hover {
    border-radius: 0rem;
  }
`;
const Card = ({ type, prop }) => {
  const [channel, setchannel] = useState();
  const [View, setView] = useState();

  useEffect(() => {
    const fetchvideos = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/v1/user/find/${prop.userId}`
      );
      setchannel(res.data);
      // console.log("channel info", res.data);
    };

    fetchvideos();
  }, [View]);
  const handleViewVideo = async () => {
    try {
      const res = await axios.put(
        `http://localhost:8800/api/v1/video/view/${prop?._id}`
      );
      setView(res.data);
      console.log("the video is viewed", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Link
      to={`/video/${prop._id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Container type={type} onClick={() => handleViewVideo()}>
        <Img src={prop?.imgUrl} type={type} />
        <Details type={type}>
          {type === "sm" ? null : <ChannelImage src={channel?.img} />}

          <Texts>
            <Title type={type}>{prop?.title}</Title>
            <ChannelName type={type}>{channel?.name}</ChannelName>
            <Info type={type}>
              {prop?.views} views {format(prop?.createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
