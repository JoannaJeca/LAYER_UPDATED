import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { BiMenu, BiSearch } from "react-icons/bi";
import { useState } from "react";
import blackLogo from "../assets/logo-dark.png";

const Header = () => {
  const [header, setHeader] = useState(false);

  const changeHeader = () => {
    const scroller = window.pageYOffset;
    if (scroller >= 300) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeHeader);

  return (
    <div>
      {header ? (
        <Container
          bg="white"
          po="fixed"
          cl="black"
          bd="none"
          bx="0px 0px 30px #A9A9A9"
        >
          <Wrapper>
            <Menu>
              <BiMenu />
            </Menu>
            <Logo1 src={blackLogo} />

            <Navhold>
              <Navs cl="black">Home</Navs>
              <Navs cl="black">Features</Navs>
              <Navs cl="black">How it works</Navs>
              <Navs cl="black">Screenshots</Navs>
              <Navs cl="black">Team</Navs>
              <Navs cl="black">News</Navs>
              <Navs cl="black">Extras+</Navs>
              <Icon>
                <AiOutlineMail />
              </Icon>
            </Navhold>
            <Search>
              <BiSearch />
            </Search>
          </Wrapper>
        </Container>
      ) : (
        <Container bg="transparent" po="fixed" cl="white" bd="none" bx="none">
          <Wrapper>
            <Menu>
              <BiMenu />
            </Menu>
            <Logo src="https://zozothemes.com/html/layer/demo/images/logo-color.png" />

            <Navhold>
              <Navs cl="">Home</Navs>
              <Navs cl="">Features</Navs>
              <Navs cl="">How it works</Navs>
              <Navs cl="">Screenshots</Navs>
              <Navs cl="">Team</Navs>
              <Navs cl="">News</Navs>
              <Navs cl="">Extras+</Navs>
              <Icon>
                <AiOutlineMail size={26} style={{ marginBottom: "3px" }} />
              </Icon>
            </Navhold>
            <Search>
              <BiSearch />
            </Search>
          </Wrapper>
        </Container>
      )}
    </div>
  );
};

export default Header;

const Search = styled.div`
  font-size: 30px;
  color: red;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
  @media screen and (max-width: 425px) {
    display: flex;
    color: #e74c3c;
  }
`;
const Menu = styled.div`
  font-size: 35px;
  color: #fff;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    color: #e74c3c;
  }
  @media screen and (max-width: 425px) {
    display: flex;
    color: #e74c3c;
  }
`;
const Icon = styled.div`
  color: red;
  font-size: 30px;
  margin-left: 20px;
  @media screen and (max-width 768px) {
    display: none;
  }
  @media screen and (max-width: 425px) {
    display: flex;
    color: none;
  }
`;
const Navs = styled.h4<{ cl: string }>`
  text-transform: uppercase;
  font-size: 17px;
  font-weight: semibold;
  cursor: pointer;
  //   font-style: sans-serif;
  color: ${({ cl }) => cl};
  transition: all 150ms;

  &:hover {
    color: #e74c3c;
    transition: all 150ms;
  }
`;
const Navhold = styled.div`
  display: flex;
  align-items: center;
  //   background-color: yellow;
  width: 59%;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
`;
const Logo1 = styled.img`
  height: 35px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
  @media screen and (max-width: 425px) {
    display: flex;
  }
`;

const Logo = styled.img`
  height: 35px;
`;
const Wrapper = styled.div`
  display: flex;
  width: 85%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div<{
  bg: string;
  po: string;
  cl: string;
  bd: string;
  bx?: string;
}>`
  display: flex;
  width: 100%;
  height: 100px;
  color: ${({ cl }) => cl};
  background-color: ${({ bg }) => bg};
  justify-content: center;
  position: ${({ po }) => po};
  border-bottom: ${({ bd }) => bd};
  box-shadow: ${({ bx }) => bx};
  z-index: 1;
  @media screen and (max-width: 425px) {
    background-color: white;
    color: black;
    position: fixed;
  }
`;
