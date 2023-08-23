import React, { useState } from "react";
import logopng from "../img/logo2.png";
import { styled } from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import UploadIcon from "@mui/icons-material/Upload";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  position: sticky;
  top: 0;
  color: ${({ theme }) => theme.text};
  max-height: 8vh;
  min-height: 8vh;
`;
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Upload from "./Upload";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.7rem;
  justify-content: space-between;
  height: 100%;
`;
const Search = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 1rem;
  padding-right: 1rem;
`;
const Input = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  height: 2.2rem;
  border-radius: 1rem 0 0 1rem;
  color: ${({ theme }) => theme.text};
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  margin-right: 1rem;
  &:focus {
    outline: 1px solid #3ea6ff;
  }
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  cursor: pointer;
  padding: 0.2rem 0.8rem;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
const Img = styled.img`
  height: 1.9rem;
`;
const Title = styled.h2`
  text-transform: capitalize;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0px;
  transform: scaleY(1.5);
`;
const Usertitle = styled.h3`
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: 500;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  border: none;
  border-radius: 50%;
`;

const Navbar = () => {
  const currentUser = useSelector((state) => state.user);
  const [Open, setOpen] = useState(false);
  const [q, setq] = useState(null);
  const navigate = useNavigate();
  console.log(currentUser);
  return (
    <>
      <Container>
        <Wrapper>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo>
              <Img src={logopng} />
              <Title>youTube</Title>
            </Logo>
          </Link>
          <Search>
            <Input
              placeholder="Search"
              onChange={(e) => setq(e.target.value)}
            ></Input>
            <div style={{ display: "flex", alignItems: "center" }}>
              <SearchIcon onClick={() => navigate(`/search?q=${q}`)} />
            </div>
          </Search>
          {currentUser.currentuser ? (
            <User>
              <Button onClick={() => setOpen(true)}>
                <VideoCallOutlinedIcon />
              </Button>

              <Avatar src={currentUser.currentuser.userWithoutPassword.img} />
              <Usertitle>
                {currentUser.currentuser.userWithoutPassword.name}
              </Usertitle>
            </User>
          ) : (
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button>
                <AccountCircleOutlinedIcon />
                Sign In
              </Button>
            </Link>
          )}
        </Wrapper>
      </Container>

      {Open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
