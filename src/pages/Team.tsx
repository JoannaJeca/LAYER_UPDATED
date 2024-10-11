import styled from "styled-components";
// import bg from "../assets/features-bg3.jpg";
// import Pic1 from "../assets/images/Team1.jpg";
// import Pic2 from "../assets/images/Team2.jpg";
// import Pic3 from "../assets/images/Team3.jpg";
// import Pic4 from "../assets/images/Team4.jpg";

import TeamGloba from "../props/TeamGloba";

const Team = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Heading>
            <h1>
              THE <span>TEAM</span>
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
        <MembersHolder>
          <TeamGloba
            image={"https://zozothemes.com/html/layer/demo/images/team/1.jpg"}
            name="Stanley Ndulue"
            role="UI/UX Expert"
          />
          <TeamGloba
            image={"https://zozothemes.com/html/layer/demo/images/team/2.jpg"}
            name="Jemima Odiri"
            role="NodeJS Developer"
          />
          <TeamGloba
            image={"https://zozothemes.com/html/layer/demo/images/team/4.jpg"}
            name="Zion Akwubo"
            role="Fullstack developer"
          />
          <TeamGloba
            image={"https://zozothemes.com/html/layer/demo/images/team/3.jpg"}
            name="Joan Ewuzie"
            role="Fullstack developer"
          />
        </MembersHolder>
      </Container>
    </div>
  );
};

export default Team;

const MembersHolder = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  width: 80%;
  justify-content: center;
  display: flex;
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

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #e9feedff, #fbffffff, #e9fbffff);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
`;
