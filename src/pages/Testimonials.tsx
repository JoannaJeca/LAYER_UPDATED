import styled from "styled-components";
import quote from "../assets/testimonials/quote-cl.png";
// import pic1 from "../assets/testimonials/1.png";
import pic2 from "../assets/testimonials/2.png";
// import pic3 from "../assets/testimonials/3.png";
import { FaStar } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const Testimonials = () => {
  // let settings = {
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   speed: 1000,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: false,
  //   cssEase: "linear",
  // };
  return (
    <div className="w-[100%] flex justify-center mt-[38px] items-center">
      <Container>
        <Wrapper>
          <Left>
            <img src={quote} width="10%" alt="a quote" />
            <h1 className="text-[28px] font-semibold my-3">
              The Best Template You Got It!
            </h1>
            <div className="text-[20px] mb-6">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-[18px] text-gray-500 mb-6">
              Lorem ipsum dolor sit amet consectetur, sed do ejusmod tempor
              incididunt ut labore et dolore. Cum sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <i> -Joanna Jecacel</i>
          </Left>
          <Right>
            <img src={pic2} width="80%" />
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};
export default Testimonials;
const Right = styled.div`
  width: 45%;
  // background-color:yellow
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    margin-top: 9px;
    margin-bottom: 10px;
  }
  p {
    line-height: 26px;
  }
  i {
    font-size: 20px;
    color: #e74c3c;
    font-weight: bold;
  }
  div {
    display: flex;
    color: orange;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  // background-color: Red;

  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  width: 60%;
  //   display: flex;
  justify-content: center;
  margin-top: 38px;
  align-items: center;
`;
