import styled from "styled-components";
import Bg from "../assets/features-bg2.jpg";
import pic1 from "../assets/1.jpg";
import pic2 from "../assets/2.jpg";
import pic3 from "../assets/3.jpg";
import pic4 from "../assets/4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Screenshot = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <Heading>
            <h1>
              app <span>screenshots</span>
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
          <Slidehold>
            {/* <SliderWrapper> */}
            <Slider {...settings}>
              <Slide className="relative group ">
                <div className="absolute top-1 w-full h-full flex justify-center opacity-0 items-center bg-black bg-opacity-[0.5] group-hover:opacity-[100] transition-all duration-300 ">
                  <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center transition-all duration-300 border-[2px] hover:transition-all border-white hover:bg-[#e74c3c] text-white text-[35px] font-light ">
                    +
                  </div>
                </div>
                <img src={pic1} width="95%" alt="" />
              </Slide>

              <Slide className="relative group ">
                <div className="absolute top-1 w-full h-full flex justify-center opacity-0 items-center bg-black bg-opacity-[0.5] group-hover:opacity-[100] transition-all duration-300 ">
                  <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center transition-all duration-300 border-[2px] hover:transition-all border-white hover:bg-[#e74c3c] text-white text-[35px] font-light ">
                    +
                  </div>
                </div>
                <img src={pic2} width="95%" alt="" />
              </Slide>

              <Slide className="relative group ">
                <div className="absolute top-1 w-full h-full flex justify-center opacity-0 items-center bg-black bg-opacity-[0.5] group-hover:opacity-[100] transition-all duration-300 ">
                  <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center transition-all duration-300 border-[2px] hover:transition-all border-white hover:bg-[#e74c3c] text-white text-[35px] font-light ">
                    +
                  </div>
                </div>
                <img src={pic3} width="95%" alt="" />
              </Slide>

              <Slide className="relative group ">
                <div className="absolute top-1 w-full h-full flex justify-center opacity-0 items-center bg-black bg-opacity-[0.5] group-hover:opacity-[100] transition-all duration-300 ">
                  <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center transition-all duration-300 border-[2px] hover:transition-all border-white hover:bg-[#e74c3c] text-white text-[35px] font-light ">
                    +
                  </div>
                </div>
                <img src={pic4} width="95%" alt="" />
              </Slide>
            </Slider>
            {/* </SliderWrapper> */}
          </Slidehold>
        </Wrapper>
      </Container>
    </div>
  );
};
export default Screenshot;

// const SliderWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   .slick-list {
//     width: 100%;
//   }
// `;

const Slide = styled.div`
  padding: 16px 8px;
  border-radius: 8px;
  // width: 10px;
  // margin: 0px 100px;
  // height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  transition: all 350ms;
  &:hover {
    transform: scale(1.1);
    transition: all 350ms;
  }
`;

const Slidehold = styled.div`
  width: 90%;
  padding-top: 30px;
  // display: flex;
  // background-color: red;
  justify-content: space-between;
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
    text-align: center;
    margin-bottom: 5px;
    span {
      color: #e74c3c;
    }
  }

  p {
    line-height: 31px;
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    margin-bottom: 8px;
  }
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    width: 55%;
    display: flex;
  }
`;

const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color:yellow;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 110px 0px;
  background-image: url(${Bg});
  background-size: cover;
  background-position: center;
`;
