import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
const Search = () => {
  const [video, setvideo] = useState(null);
  const query = useLocation().search;
  useEffect(() => {
    try {
      const fetchvideo = async () => {
        const res = await axios.get(
          `http://localhost:8800/api/v1/video/search${query}`
        );
        setvideo(res.data.video);
        console.log("search video", res.data.video);
      };
      fetchvideo();
    } catch (error) {
      console.log(error);
    }
  }, [query]);
  return (
    <Container>
      {video?.map((video) => {
        return <Card key={video._id} prop={video} />;
      })}
    </Container>
  );
};

export default Search;
