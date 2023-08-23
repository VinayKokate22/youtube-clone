import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import Card from "../components/Card";
import { useSelector } from "react-redux";
const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
const Home = ({ type }) => {
  const data = useSelector((state) => state.user);
  //the data is the accesstoken of the user which will be used by the verify function to verify the user
  const [video, setvideo] = useState([]);
  useEffect(() => {
    const fetchvideos = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/v1/video/${type}`,
        {
          headers: {
            authorization: "Bearer " + data.currentuser?.accesstoken,
          },
        }
      );
      setvideo(res.data.video);
      console.log("the data about the video", res.data.video);
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
