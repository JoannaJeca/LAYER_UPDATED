import styled from "styled-components";
import { IconType } from "react-icons";

interface iFeatures {
  h3Text: string;
  icon: IconType;
}

const GlobalFeatures: React.FC<iFeatures> = ({ h3Text, icon: Icon }) => {
  return (
    <div>
      <Div>
        <Circle>
          <div>
            <Icon size={39} />
          </div>
        </Circle>
        <h3 className="font-semibold text-[19px]">{h3Text}</h3>
      </Div>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit est is.
      </Text>
    </div>
  );
};
export default GlobalFeatures;

const Text = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 16px;
  color: white;
  font-size: 13px;
`;

const Circle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #e74c3c;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 60%;
  transition: all 150ms;

  &:hover {
    rotate: 360deg;
    transition: all 150ms;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 115px;
  border: 1px solid #e74c3c;
  margin-bottom: 0px;
  display: flex;
  color: white;
  border-bottom: 0px;
  // background-color: yellow;
  margin-top: 70px;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  h3 {
    margin-bottom: 0;
    text-transform: uppercase;
  }
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
    // display: block;
    ${Text} {
      width: 70%;
    }
  }
`;
