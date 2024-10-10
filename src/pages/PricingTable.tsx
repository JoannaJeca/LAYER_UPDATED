import styled from "styled-components";
import GlobalPriceList from "../props/GlobalPriceList";

const PriceTab = () => {
  return (
    <div>
      <Container className="my-[60px] ">
        <Wrapper>
          <Heading>
            <h1>
              pricing <span>list</span>
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
          <Body className="grid grid-cols-1 md:grid-cols-2 gap-9 xl:grid-cols-4">
            <GlobalPriceList
              borderColor="#ff5000ff"
              lg="#ff5000ff, #fe8c00ff"
              text="Basic"
              number="19"
            />
            <GlobalPriceList
              borderColor="#0045e5ff"
              lg="#0045e5ff, #03c4efff"
              text="Pro"
              number="29"
            />
            <GlobalPriceList
              borderColor="#f1384aff"
              lg="#f1384aff, #a003e6ff"
              text="Advanced"
              number="39"
            />
            <GlobalPriceList
              borderColor="#4837f3ff"
              lg="#4837f3ff, #9406eeff"
              text="Premium"
              number="59"
            />
          </Body>
        </Wrapper>
      </Container>
    </div>
  );
};
export default PriceTab;

const Body = styled.div`
  // display: flex;
  justify-content: space-between;
  // width: 100%;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 44%;
  height: 10%;

  h1 {
    text-transform: uppercase;
    font-size: 36px;
    margin-bottom: 5px;
    span {
      color: #e74c3c;
    }
  }

  p {
    line-height: 31px;
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    margin-top: 8px;
    @media screen and (max-width: 768px) {
      font-size: 13px;
      text-align: center;
    }
  }
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    width: 54%;
  }
`;

const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content:flex-end;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
