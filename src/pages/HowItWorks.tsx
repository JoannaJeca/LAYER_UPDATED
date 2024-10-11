import styled from "styled-components";
import backPic from "../assets/small-screen.png";
import frontPic from "../assets/big-screen.png";
import GlobalHIW from "../props/GlobalHIW";

import { BiBell, BiHeart, BiMessage, BiStar } from "react-icons/bi";

const HIW = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <img src={backPic} alt="" />
            <Image src={frontPic} alt="" />
          </Left>
          <Right>
            <Heading>
              <h1>
                How it <span>works</span>
              </h1>
              <Rope>
                <div />
                <hr />
                <line />
              </Rope>

              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore aliqua. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore aliqua.Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </Heading>
            <Body>
              <Benefits>
                <B>Benefits Of App</B>
                <Components>
                  <div
                    style={{ margin: "0", display: "flex", flexWrap: "wrap" }}
                  >
                    <GlobalHIW
                      Licon={BiBell}
                      Ltext="Notifications"
                      Stext="Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit."
                      left="#bc5bddff"
                      right="#ed56bcff"
                    />
                    <GlobalHIW
                      Licon={BiMessage}
                      Ltext="24/7 Support"
                      Stext="Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit."
                      left="#f1386aff"
                      right="#fb6351ff"
                    />
                  </div>
                  <div
                    style={{ margin: "0", display: "flex", flexWrap: "wrap" }}
                  >
                    <GlobalHIW
                      Licon={BiStar}
                      Ltext="Favourites"
                      Stext="Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit."
                      left="#8584e8ff"
                      right="#61c2e5ff"
                    />
                    <GlobalHIW
                      Licon={BiHeart}
                      Ltext="Wishlist"
                      Stext="Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit."
                      left="#bc5bddff"
                      right="#ed56bcff"
                    />
                  </div>
                </Components>
                <Button>Learn More</Button>
              </Benefits>
            </Body>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export default HIW;

const B = styled.h1`
  margin: 20px 0 0 0;
  font-weight: semibold;
  font-size: 19px;
`;

const Components = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  margin-bottom: 30px;
`;

const Benefits = styled.div`
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
`;

const Button = styled.button`
  width: 140px;
  background-color: #e74c3c;
  height: 50px;
  border-radius: 100px;
  cursor: pointer;
  color: #fff;
  font-weight: semibold;
  border: 0;
  margin-top: 15px;
  transition: all 350ms;
  &:hover {
    background-color: black;
    transition: all 350ms;
    color: white;
  }
  cursor: pointer;
`;

// const IconTab = styled.div<{ lg?: string }>`
//   width: 60px;
//   height: 60px;
//   border-top-right-radius: 50px;
//   border-bottom-left-radius: 50px;
//   border-top-left-radius: 50px;
//   // margin-right:15px;
//   background-image: linear-gradient(to bottom, ${({ lg }) => lg});
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1;
//   color: white;
//   font-size: 25px;
//   &:hover {
//     rotate: 180deg;
//   }
// `;
const Body = styled.div`
  h1 {
    margin-top: 12px;
  }
  @media screen and @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: flex;
  }
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
    height: 2px;
    width: 47px;
    background-color: #e74c3c;
  }
  line {
    height: 0.5px;
    width: 45px;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const Heading = styled.div`
  //   background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 34%;
  // background-color:white;

  h1 {
    text-transform: uppercase;
    font-size: 36px;
    margin-bottom: 5px;
    span {
      color: #e74c3c;
    }
  }

  p {
    line-height: 22px;
    font-size: 15px;
    margin-top: 8px;
    color: rgba(0, 0, 0, 0.7);
    text-align: start;
    width: 100%;
    height: 30.5%;
  }
  // margin-bottom:10px;
`;

const Right = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  // background-color:yellow;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  position: absolute;
  right: 65%;
  // width:20%;
  object-fit: cover;
  // margin-right:25px;
  @media screen and (max-width: 768px) {
    position: absolute;
    left: 25%;
  }
`;

const Left = styled.div`
  width: 35%;
  // background-color:red;
  display: flex;
  justify-content: start;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 56px 0px;
  margin-bottom: 80px;
  //   z-index: -1;
`;
