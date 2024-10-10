import styled from "styled-components";
import GlobalCLCircles from "../props/GlobalColorCircles";
import { SlLike } from "react-icons/sl";
import { TfiDownload } from "react-icons/tfi";
import { TfiCup } from "react-icons/tfi";
import { MdOutlinePerson4 } from "react-icons/md";
import GlobalCountUp from "../props/GlobalCountUp";

const Achievements = () => {
  return (
    <div>
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Wrap>
          <GlobalCLCircles lg="#e74c3c, purple" icon={TfiDownload} />
          <h3 className="font-semibold">Downloads</h3>
          <GlobalCountUp end={1505} />
        </Wrap>
        <Wrap>
          <GlobalCLCircles lg="#5d2af2, #860eee" icon={SlLike} />
          <h3>Likes</h3>
          <GlobalCountUp end={5200} />
        </Wrap>
        <Wrap>
          <GlobalCLCircles lg="#187ae9, #09c5bb" icon={TfiCup} />
          <h3>Awards won</h3>
          <GlobalCountUp end={400} />
        </Wrap>
        <Wrap>
          <GlobalCLCircles lg="#e74c3c, orangered" icon={MdOutlinePerson4} />
          <h3>Author working</h3>
          <GlobalCountUp end={34} />
        </Wrap>
      </Container>
    </div>
  );
};
export default Achievements;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  h3 {
    margin-bottom: 0px;
    margin-top: 9px;
    font-size: 18px;
    font-weight: 600;
  }
  h1 {
    font-size: 56px;
    color: #e74c3c;
    margin-top: 4px;
    margin-left: 10px;
  }
`;

const Container = styled.section`
  width: 100%;
  //   display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 90px 0px;
`;
