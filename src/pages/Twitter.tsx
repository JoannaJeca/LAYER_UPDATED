import styled from "styled-components";
// import GlobalCLCircles from "../props/GlobalColorCircles";
import { IoLogoTwitter } from "react-icons/io";

const Twitter = () => {
  return (
    <div>
      <Container>
        <Circle>
          <IoLogoTwitter />
        </Circle>
      </Container>
    </div>
  );
};
export default Twitter;

const Circle = styled.div`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background-image: linear-gradient(to bottom, #187ae9, #09c5bb);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 33px;
  // z-index:-1;
  // transition: all 350ms;
  position: absolute;
  top: -35px;
`;

const Container = styled.section`
  width: 100%;
  background-color: black;
  display: flex;
  padding: 80px 0px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  position: relative;
`;
