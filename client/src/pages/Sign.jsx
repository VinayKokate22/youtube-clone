import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginFailure, loginStart, loginSuccess } from "../redux/UserSlice";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: calc(100vh - 56px); */
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 1rem;
  padding: 30px 50px;
  gap: 0.8rem;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  margin-top: 1rem;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const Sign = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log("this is the user credentials ", name, password, email);
  // }, [name, password, email]);
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    console.log("this is the user credentials ", name, password, email);

    // to prevent the refresh of the page when we click on the signin button
    try {
      const res = await axios.post("http://localhost:8800/api/v1/auth/signin", {
        name,
        password,
      });
      dispatch(loginSuccess(res.data));
    } catch (error) {
      dispatch(loginFailure());
    }
  };
  const handlesignup = async (e) => {
    e.preventDefault();
    // to prevent the refresh of the page when we click on the signin button
    try {
      const res = await axios.post("http://localhost:8800/api/v1/auth/signup", {
        name,
        password,
        email,
      });
      console.log(res.data);
    } catch (error) {}
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to LamaTube</SubTitle>
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="username"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <Button onClick={handleLogin}>Sign in</Button>
        <Title>or</Title>
        <Input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={handlesignup}>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default Sign;
