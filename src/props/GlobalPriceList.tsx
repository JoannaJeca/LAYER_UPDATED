import styled from "styled-components";
import { FaCircleCheck } from "react-icons/fa6";

interface iPrice {
  text: string;
  lg: string;
  borderColor: string;
  number: string;
}

const PricingComponent: React.FC<iPrice> = ({
  text,
  number,
  lg,
  borderColor,
}) => {
  return (
    <div>
      <Container className="">
        <Wrapper>
          <Button
            className="text-black z-10 shadow-xl"
            lg={lg}
            borderColor={borderColor}
          >
            {text}
          </Button>
          <Money>
            <h1>
              $<span>{number}</span>/monthly
            </h1>
          </Money>
          <Feature>
            <Line>
              <Icon>
                <FaCircleCheck />
              </Icon>
              <p>1 GB Space</p>
            </Line>
            <Line>
              <Icon>
                <FaCircleCheck />
              </Icon>
              <p>10 GB Bandwidth</p>
            </Line>
            <Line>
              <Icon>
                <FaCircleCheck />
              </Icon>
              <p>10 Portfolio Items</p>
            </Line>
            <Line>
              <Icon>
                <FaCircleCheck />
              </Icon>
              <p>Woo-commerce Support</p>
            </Line>
            <Line>
              <Icon>
                <FaCircleCheck />
              </Icon>
              <p>Integration with press</p>
            </Line>
          </Feature>
          <BtnHolder>
            <Button2>Order Now</Button2>
          </BtnHolder>
        </Wrapper>
      </Container>
    </div>
  );
};

export default PricingComponent;
const Button2 = styled.div`
  border: none;
  padding: 14px 28px;
  background-color: black;
  &:hover {
    background-color: #e74c3cff;
    transition: all 350ms;
  }
  border-radius: 30px;
  font-size: 18px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  margin-top: 30px;
`;

const BtnHolder = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  margin-top: 6px;
  color: #e74c3cff;
`;

const Line = styled.div`
  color: #e74c3cff;
  display: flex;
  align-items: center;
  gap: 9px;
  p {
    margin: 10px 0px;
    color: grey;
  }
`;

const Feature = styled.div``;

const Money = styled.div`
  h1 {
    font-size: 14px;
    span {
      font-size: 50px;
    }
  }
`;

const Button = styled.button<{ lg: string; borderColor: string }>`
  border: none;
  padding: 14px 34px;
  background-image: linear-gradient(to right, ${({ lg }) => lg});
  border-radius: 30px;
  //   background-color: red;
  font-size: 18px;
  color: white;
  font-weight: 700;
  box-shadow: 0 8px 10px -6px ${({ borderColor }) => borderColor};
  margin-bottom: 20px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 90%;
  background-color: white;
`;

const Container = styled.div`
  width: 290px;
  // min-height: 440px;
  height: 530px;
  background-color: white;
  border-radius: 25px;
  // margin-right: 50px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  //   padding: 30px 0px 30px 0px;
  border: 1px solid silver;
  transition: all 350ms;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 350ms;
  }
  // @media screen and (max-width: 480px) {
  //   width: 300px;
  // }
`;
