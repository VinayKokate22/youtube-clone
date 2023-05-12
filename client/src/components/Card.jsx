import React from "react";
import { styled } from "styled-components";
import img from "../img/photo.png";
import img2 from "../img/photo2.png";
import { Link } from "react-router-dom";
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
const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Img src={img} type={type} />
        <Details type={type}>
          {type === "sm" ? null : <ChannelImage src={img2} />}

          <Texts>
            <Title type={type}>
              React social media app design dark/light mode & responsive & html
            </Title>
            <ChannelName type={type}>ChannelName</ChannelName>
            <Info type={type}>125K views 1 year ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
