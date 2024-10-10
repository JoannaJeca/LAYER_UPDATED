import styled from "styled-components";
import bg from "../assets/contact-bg.jpg";

const GetInTouch = () => {
  return (
    <div>
      <Bg>
        <Container>
          <InputHold>
            <Wrap>
              <Txt>Get In Touch</Txt>
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <TextArea placeholder="Your message" />
              <Button>Send Now</Button>
            </Wrap>
          </InputHold>
          <Hold>
            <Heading>
              <h1>
                GETTING BEST <span>FEATURES EVER</span>
              </h1>
              <Rope>
                <div />
                <hr />
                <line />
              </Rope>

              <p>
                We ensure quality & support. People love us & we love them.
                Lorem ipsum dolor sit amet, consectetur amet sit adipiscing
                elitpsum dolor sit amet.
              </p>
            </Heading>
            <Button>Contact Us</Button>
          </Hold>
        </Container>
      </Bg>
    </div>
  );
};

export default GetInTouch;

const Bg = styled.div`
  width: 100%;

  height: 80vh;
  background-image: url(${bg});
  background-size: cover;
  @media screen and (max-width: 768px) {
    min-height: 150vh;
  }
`;

const Hold = styled.div`
  width: 300px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    text-align: center;
    width: 63%;
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
  display: flex;
  flex-direction: column;
  //   align-items: center;
  width: 100%;
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
    text-align: left;
    margin-top: 8px;
  }
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 40px;
  color: white;
  font-size: 15px;
  background-color: #e74c3cff;
  padding: 11px 25px;
  transition: all 350ms;

  &:hover {
    transition: all 350ms;
    background-color: black;
    cursor: pointer;
  }
`;

const TextArea = styled.textarea`
  width: 96%;
  height: 80px;
  border-radius: 7px;
  padding-left: 20px;

  border: 1px solid silver;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 95%;
  height: 40px;
  outline: silver 1px solid;
  border: none;
  border-radius: 7px;
  padding-left: 20px;
  margin-bottom: 15px;
`;

const Txt = styled.div`
  font-size: 30px;
  margin-bottom: 15px;
  font-family: sans-serif;
`;

const Wrap = styled.div`
  width: 80%;
  height: 100%;
  background-color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
`;

const InputHold = styled.div`
  width: 400px;
  height: 400px;
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background-color: rgb(255, 255, 255);
`;

const Container = styled.div`
  //   width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff5f;
  gap: 30px;
  padding: 50px 0;
  flex-wrap: wrap;
`;
