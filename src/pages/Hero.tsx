import styled from "styled-components";
import img from "../assets/bg-1.jpg";
import GlobalButton from "../props/GlobalButton";

const Hero = () => {
  return (
    <Container>
      <Dark>
        <Wrapper>
          <Left>
            <h2>
              BEST WAY TO <span>PRESENT</span> YOUR APP
            </h2>
            <p>
              We ensure quality & support. People love us & we love them. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>

            <Holder>
              <GlobalButton
                bg="#e74c3c"
                wd="140px"
                bd="none"
                ml=""
                text="Learn more"
              />
              <GlobalButton
                bg="transparent"
                wd="180px"
                bd="1px solid #fff"
                ml="14px"
                text="Download Now"
              />
            </Holder>
          </Left>
          <Right>
            <Img src="https://zozothemes.com/html/layer/demo/images/about-us/about-1.png" />
          </Right>
        </Wrapper>
      </Dark>
    </Container>
  );
};

export default Hero;
const Dark = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 75px 0px;
  justify-content: center;
  display: flex;
`;
const Holder = styled.div`
  display: flex;
  margin-top: 35px;
`;

const Img = styled.img`
  height: 100%;
  @media screen and (max-width: 768px) {
    height: 35%;
  }
  @media screen and (max-width: 425px) {
    height: 16%;
    width: 93%;
  }
`;
const Right = styled.div`
  width: 58%;
  display: flex;
  justify-content: center;
  //   background-color: yellow;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 60px;
    justify-content: center;
    display: flex;
    /* background-color: red; */
  }
`;
const Left = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  h2 {
    color: #fff;
    font-size: 39px;
    font-weight: 600;
    width: 75%;
    margin-bottom: 25px;
    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
    @media screen and (max-width: 425px) {
      width: 100%;
      font-size: 56px;
    }
    span {
      color: #e74c3c;
    }
  }
  p {
    color: #fff;
    margin: 0;
    line-height: 31px;

    @media screen and (max-width: 768px) {
      font-size: 15px;
      font-weight: semibold;
      width: 80%;
    }
    @media screen and (max-width: 425px) {
      font-size: 13px;
      width: 99%;
      font-weight: 560;
      line-height: 23px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  flex-wrap: wrap;
  //   background-color: red;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 768px) {
    height: 150vh;
  }
`;
