import { React } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Profile from "./mypage/Profile";
import Schedule from "./mypage/Schedule";

const Mypage = () => {
  return (
    <Page>
      <Routes>
        <Route path="main" element={<Profile />} />
        <Route path="schedule" element={<Schedule />} />
      </Routes>
    </Page>
  );
};

const Page = styled.div`
  border-radius: ${(50 / 1512) * 100 + "vw"};
  width: 100%;
  display: flex;
  position: relative;
`;

export default Mypage;
