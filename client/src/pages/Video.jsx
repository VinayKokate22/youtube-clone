import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { format } from "timeago.js";
import img from "../img/photo.png";
import img2 from "../img/photo2.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Comments from "../components/Comments";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useLocation } from "react-router-dom";
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
  object-fit: cover;
  cursor: pointer;
`;
const VideoWrapper = styled.div`
  width: 100%;
  height: 30rem;
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
const VideoFrame = styled.video`
  height: 30rem;
  max-height: 30rem;
  width: 100%;
  object-fit: cover;
`;
const Video = ({ type }) => {
  const data = useSelector((state) => state.user);
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf("/") + 1);
  const location = useLocation();
  const windowurl = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );
  //the data is the accesstoken of the user which will be used by the verify function to verify the user
  const [video, setvideo] = useState([]);
  const [mainvideo, setmainvideo] = useState(null);
  const [User, setUser] = useState(null);
  const [SigninUser, setSigninUser] = useState(null);
  const [Like, setLike] = useState(null);
  const [Sub, setSub] = useState(null);
  const [Id, setId] = useState(true);

  useEffect(() => {
    const getVideo = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/v1/video/find/${id}`
      );
      // console.log("the main video data is", res.data.video);
      setmainvideo(res.data.video);
      const res_user = await axios.get(
        `http://localhost:8800/api/v1/user/find/${res.data.video.userId}`
      );
      // console.log("the user info of the video", res_user.data);

      setUser(res_user.data);
    };

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
      // console.log(res.data.video);
    };
    const getsigninUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/v1/user/find/${data.currentuser.userWithoutPassword._id}`
        );
        setSigninUser(res.data);
      } catch (error) {}
    };

    fetchvideos();
    getVideo();
    getsigninUser();
  }, [type, Like, Sub, Id, windowurl]);
  const handleLikeVideo = async () => {
    const res = await axios.get(
      `http://localhost:8800/api/v1/user/like/${id}`,
      {
        headers: {
          authorization: "Bearer " + data.currentuser?.accesstoken,
        },
      }
    );
    setLike(res.data);
    console.log(res.data);
  };
  const handleDisikeVideo = async () => {
    const res = await axios.get(
      `http://localhost:8800/api/v1/user/dislike/${id}`,
      {
        headers: {
          authorization: "Bearer " + data.currentuser?.accesstoken,
        },
      }
    );
    setLike(res.data);
    console.log(res.data);
  };
  const dispatch = useDispatch();
  const handleSubscribe = async () => {
    try {
      const res = await axios.put(
        `http://localhost:8800/api/v1/user/sub/${mainvideo.userId}`,
        {},
        {
          headers: {
            authorization: "Bearer " + data.currentuser?.accesstoken,
          },
        }
      );
      setSub(res.data);
      dispatch();
    } catch (error) {
      console.log(error);
    }
  };
  const handleUnSubscribe = async () => {
    try {
      const res = await axios.put(
        `http://localhost:8800/api/v1/user/unsub/${mainvideo.userId}`,
        {},
        {
          headers: {
            authorization: "Bearer " + data.currentuser?.accesstoken,
          },
        }
      );
      setSub(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={mainvideo?.videoUrl} controls></VideoFrame>
        </VideoWrapper>
        <Title>{mainvideo?.title}</Title>
        <Details>
          {/* <Info>125K views 1 year ago</Info> */}
          <ChannelDetails>
            <ChannelImage src={User?.img} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
              }}
            >
              <ChannelName>{User?.name}</ChannelName>
              <p style={{ color: "#868686", fontSize: "14px" }}>
                {User?.suscribers} Subscribers
              </p>
            </div>
            {console.log(SigninUser?.suscribedUsers)}
            {console.log(User?._id)}
            {console.log(SigninUser?.suscribedUsers.includes(User?._id))}
            {SigninUser?.suscribedUsers.includes(User?._id) ? (
              <SubButton onClick={() => handleUnSubscribe()}>
                UnSubscribe
              </SubButton>
            ) : (
              <SubButton onClick={() => handleSubscribe()}>Subscribe</SubButton>
            )}
          </ChannelDetails>

          <Buttons>
            <Button onClick={() => handleLikeVideo()}>
              <ThumbUpIcon />
              {mainvideo?.likes.length}
            </Button>
            <Button onClick={() => handleDisikeVideo()}>
              <ThumbDownIcon />
              {mainvideo?.dislike.length}
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
          {mainvideo?.views} views {format(mainvideo?.createdAt)} <br /> <br />{" "}
          {mainvideo?.desc}
        </Info>
        <Comments prop={id} />
      </Content>

      <Recommended onClick={() => setId(!Id)}>
        {video?.map((video) => {
          return <Card key={video._id} type="sm" prop={video} />;
        })}
      </Recommended>
    </Container>
  );
};

export default Video;
