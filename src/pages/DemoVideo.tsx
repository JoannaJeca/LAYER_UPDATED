import styled from "styled-components";
import bg from "../assets/bg-3.jpg";
import VideoPic from "../assets/video_bg.png";
import { IoIosPlayCircle } from "react-icons/io";

const DemoVid = () => {
  return (
    <div>
      <Container>
        <Curtain>
          <Heading>
            <h1>
              Welcome to <span>Layer</span>
            </h1>
            <Rope>
              <div />
              <hr />
              <line />
            </Rope>

            <p>
              We ensure quality & support. People love us & we love them. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Heading>
          <Body>
            <img src={VideoPic} alt="" className="z-10" />
            <Circle className="border shadow-md">
              <IoIosPlayCircle />
            </Circle>
          </Body>
        </Curtain>
      </Container>
    </div>
  );
};
export default DemoVid;
const Circle = styled.div`
  width: 70px;
  height: 70px;
  font-size: 22px;
  // box-shadow:20px 30px 0px 0px #e74c3c;
  border-radius: 50px;
  border: none;
  background-color: #e74c3c;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 35%;
  left: 45%;
`;

const Body = styled.div`
  position: relative;
`;

const Rope = styled.div`
  width: 95px;
  display: flex;
  align-items: center;

  div {
    width: 11px;
    height: 11px;
    background-color: #e74c3c;
    border-radius: 50%;
  }
  hr {
    height: 0.5px;
    width: 47px;
    background-color: #e74c3c;
  }
  line {
    height: 0.5px;
    width: 45px;
    background-color: white;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 44%;
  height: 10%;
  padding-top: 80px;

  h1 {
    text-transform: uppercase;
    font-size: 36px;
    color: white;
    text-align: center;
    margin-bottom: 5px;
    span {
      color: #e74c3c;
    }
  }

  p {
    line-height: 31px;
    margin-top: 8px;
    color: white;
    text-align: center;
  }
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    width: 55%;
    display: flex;
  }
`;
const Curtain = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
  // padding: 75px 0px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.section`
  width: 100%;
  height: 85vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
