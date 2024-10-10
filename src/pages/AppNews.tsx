import styled from "styled-components";
import GlobalNews from "../props/GlobalNews";

const News = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Heading>
            <h1>
              App <span>News</span>
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
        </Wrapper>
        <NewsHolder>
          <GlobalNews />
        </NewsHolder>
        <Button>Load More Post</Button>
      </Container>
    </div>
  );
};

export default News;
const Button = styled.button`
  border: none;
  border-radius: 40px;
  color: white;
  font-size: 15px;
  background-color: #e74c3cff;
  padding: 10px 20px;
  transition: all 350ms;

  &:hover {
    transition: all 350ms;
    background-color: black;
    cursor: pointer;
  }
`;

const NewsHolder = styled.div`
  width: 100%;
  margin: 50px 0 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
  }
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    text-align: center;
    width: 63%;
  }
`;

const Wrapper = styled.div`
  width: 80%;
  justify-content: center;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
`;
