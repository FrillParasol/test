import React from "react";
import styled from "styled-components";
import Typing from "react-typing-animation";

import bg from "../../img/background1.jpg";

const Img = styled.img`
  width: 100vw;
  height: 100%;
`;
const Contect = () => {
  return (
    <>
      <h1>여기는 Contect 페이지 입니다.</h1>
      <h2>메롱이야.</h2>
      <Img src={bg} />
      <Typing loop="true" startDelay="1">
        <span>이 페이지는 리윀트로 제작되었습니다.</span>
        <Typing.Backspace count={30} startDelay="1000" />
      </Typing>
    </>
  );
};

export default Contect;
