import styled from "styled-components";
import { IconType } from "react-icons";

interface iComponent {
  left: string;
  right: string;
  Ltext: string;
  Stext: string;
  Licon: IconType;
}

const GlobalHIW: React.FC<iComponent> = ({
  left,
  right,
  Ltext,
  Stext,
  Licon,
}) => {
  return (
    <div>
      <Container>
        <Icon left={left} right={right}>
          <Licon />
        </Icon>
        <TxtHold>
          <Large>{Ltext}</Large>
          <Small>{Stext}</Small>
        </TxtHold>
      </Container>
    </div>
  );
};

export default GlobalHIW;

const Small = styled.div`
  font-size: 15px;
  //   font-weight: 400;
  text-align: left;
  width: 250px;
  color: #a9a9a9ff;
  @media (max-width: 360px) {
    width: 210px;
  }
`;

const Large = styled.div`
  font-size: 20px;
  text-align: left;
  font-weight: 700;
  margin: 14px 0;
`;

const TxtHold = styled.div`
  width: 70%;
  margin-left: 25px;
`;

const Icon = styled.div<{ right: string; left: string }>`
  height: 65px;
  width: 65px;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  background: linear-gradient(
    to right,
    ${({ left }) => left},
    ${({ right }) => right}
  );
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 33px;
  color: white;
  margin-top: 13px;
  transition: all 350ms;

  &:hover {
    border-top-left-radius: 0px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
    transition: all 350ms;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  margin: 10px 0px;
  @media screen and (max-width: 425px) {
    width: 100%;
    justify-content: center;
  }
`;
