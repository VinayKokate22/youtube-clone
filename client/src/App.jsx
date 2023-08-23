import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

import { darktheme, lighttheme } from "./utils/Theme";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Sign from "./pages/Sign";
import Search from "./pages/Search";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const InnerContainer = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
  max-height: 92vh;
  min-height: 92vh;
  overflow-y: scroll;
  color: ${({ theme }) => theme.text};
  padding: 3rem 5rem;
  &::-webkit-scrollbar-thumb {
    background-color: rgb(143, 143, 143);
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar {
    width: 9px;
  }
`;
const Wrapper = styled.div``;
function App() {
  const [darkMode, setdarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darktheme : lighttheme}>
      <Container>
        <BrowserRouter>
          <Navbar />
          <InnerContainer>
            <Menu darkMode={darkMode} setdarkMode={setdarkMode} />
            <Main>
              <Wrapper>
                <Routes>
                  <Route path="/">
                    <Route index element={<Home type="random" />} />
                    <Route path="trends" element={<Home type="trend" />} />
                    <Route path="search" element={<Search />} />
                    <Route path="subcription" element={<Home type="sub" />} />
                    <Route path="signin" element={<Sign />} />
                    <Route path="video">
                      <Route path=":id" element={<Video type="random" />} />
                    </Route>
                  </Route>
                </Routes>
              </Wrapper>
            </Main>
          </InnerContainer>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
