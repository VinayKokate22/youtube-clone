import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import Card from "../components/Card";
const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
const Home = ({ type }) => {
  const [video, setvideo] = useState([]);
  useEffect(() => {
    const fetchvideos = async () => {
      const res = await axios.get(`http://localhost:8800/api/v1/video/${type}`);
      setvideo(res.data.video);
      console.log(res.data.video);
    };

    fetchvideos();
  }, [type]);
  return (
    <Container>
      {video.map((video) => {
        return <Card key={video._id} prop={video} />;
      })}
    </Container>
  );
};

export default Home;
