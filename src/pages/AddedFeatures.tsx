import styled from "styled-components";
import bg from "../assets/bg-2.jpg";
import GlobalFeatures from "../props/GlobalFeatures";
import bgPhone from "../assets/about-3.png";

import { FaHtml5 } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";

const AddedFts = () => {
  return (
    <div>
      <Container>
        <Curtain>
          <Wrapper>
            <Heading>
              <h1>
                additional <span>features</span>
              </h1>
              <Rope>
                <div />
                <hr />
                <line />
              </Rope>

              <p>
                We ensure quality & support. People love us & we love them.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Heading>
            <main>
              <Holder>
                <GlobalFeatures h3Text="BOOTSTRAP 3.2" icon={FaBootstrap} />
                <GlobalFeatures h3Text="HTML5 & CSS3" icon={FaHtml5} />
                <GlobalFeatures h3Text="responsive" icon={FaLaptop} />
                <GlobalFeatures h3Text="unlimited support" icon={FaRocket} />
              </Holder>
            </main>
          </Wrapper>
          <Bottom>
            <img src={bgPhone} width="100%" alt="" />
          </Bottom>
        </Curtain>
      </Container>
    </div>
  );
};
export default AddedFts;
const Bottom = styled.div`
  // width:80%;
  // background-color:yellow;
  display: flex;
  align-items: flex-end;
`;

const Holder = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
    display: block;
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
    height: 1px;
    width: 45px;
    background-color: #fff;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 44%;
  height: 10%;
  color: white;
  h1 {
    text-transform: uppercase;
    font-size: 36px;
    margin-bottom: 5px;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
    span {
      color: #e74c3c;
    }
  }

  p {
    line-height: 31px;
    text-align: center;
    margin-top: 8px;
    @media screen and (max-width: 768px) {
      font-size: 14px;
      text-align: center;
    }
  }
  margin-bottom: 35px;
  @media screen and (max-width: 768px) {
    width: 56%;
    padding-bottom: 35px;
  }
`;

const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color:blue;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Curtain = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.section`
width;100%;
height:100%;
display:flex;
align-itemS:center;
justify-content:center;
background-image: url(${bg});
background-size:cover;
background-position:center;
z-index:-1;
background-repeat:no-repeat;`;
