import React from "react";
import styled, { ThemeProvider } from "styled-components";

import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
const Container = styled.div`
  flex: 1.5;
  background-color: ${({ theme }) => theme.bg};
  max-height: 92vh;
  min-height: 92vh;
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 0.7rem 1rem;
  overflow-y: scroll;

  &::-webkit-scrollbar-thumb {
    background-color: rgb(143, 143, 143);
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar {
    width: 9px;
    display: none;
  }
  &:hover::-webkit-scrollbar {
    width: 8px;
    display: block;
  }
`;

const Title2 = styled.h2`
  text-transform: capitalize;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  margin-left: 0.7rem;
  color: #aaaaaa;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 0.55rem 0.7rem;
  font-weight: 400;
  gap: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: #a1a1a152;
    border-radius: 0.4rem;
  }
`;
const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 1rem 0;
`;
const Login = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0%.7rem;

  gap: 1rem;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  cursor: pointer;
  padding: 0.3rem 1rem;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
`;

const Menu = ({ darkMode, setdarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Item>
          <HomeIcon
            sx={{ stroke: "${({ theme }) => theme.bg}", strokeWidth: 0.9 }}
          />{" "}
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon
            sx={{
              stroke: "${({ theme }) => theme.bg}",

              strokeWidth: 0.9,
            }}
          />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon
            sx={{ stroke: "${({ theme }) => theme.bg}", strokeWidth: 0.9 }}
          />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon
            sx={{ stroke: "${({ theme }) => theme.bg}", strokeWidth: 0.9 }}
          />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon
            sx={{ stroke: "${({ theme }) => theme.bg}", strokeWidth: 0.9 }}
          />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment and subscribe
          <Button>
            <AccountCircleOutlinedIcon />
            Sign In
          </Button>
        </Login>
        <Hr></Hr>
        <Title2>Best of Vinay</Title2>
        <Item>
          <LibraryMusicOutlinedIcon
            sx={{ stroke: "${({ theme }) => theme.bg}", strokeWidth: 0.9 }}
          />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon
            sx={{ stroke: "${({ theme }) => theme.bg}", strokeWidth: 0.9 }}
          />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon
            sx={{ stroke: "${({ theme }) => theme.bg}", strokeWidth: 0.9 }}
          />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon
            sx={{ stroke: "${({ theme }) => theme.bg}", strokeWidth: 0.9 }}
          />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon
            sx={{ stroke: "${({ theme }) => theme.bg}", strokeWidth: 0.9 }}
          />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon
            sx={{ stroke: "${({ theme }) => theme.bg}", strokeWidth: 0.9 }}
          />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon
            sx={{ stroke: "${({ theme }) => theme.bg}", strokeWidth: 0.9 }}
          />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon
            sx={{ stroke: "${({ theme }) => theme.bg}", strokeWidth: 0.9 }}
          />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon
            sx={{ stroke: "${({ theme }) => theme.bg}", strokeWidth: 0.9 }}
          />
          Help
        </Item>
        <Item onClick={() => setdarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon
            sx={{ stroke: "${({ theme }) => theme.bg}", strokeWidth: 0.9 }}
          />
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
