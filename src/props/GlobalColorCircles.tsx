import styled from "styled-components";
import { IconType } from "react-icons";

interface iCard {
  lg: string;
  po?: string;
  bt?: string;
  icon: IconType;
}

const GlobalCLCircles: React.FC<iCard> = ({ lg, icon: Icon, po, bt }) => {
  return (
    <div>
      <Circle po={po} bt={bt} lg={lg}>
        <div className="z-10">
          <Icon />{" "}
        </div>
      </Circle>
    </div>
  );
};
export default GlobalCLCircles;
const Circle = styled.div<{ lg: string; po?: string; bt?: string }>`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background-image: linear-gradient(to bottom, ${({ lg }) => lg});
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 33px;
  // z-index:-1;
  transition: all 350ms;
  position: ${({ po }) => po};
  bottom: ${({ bt }) => bt};

  &:hover {
    transform: scale(1.1);
  }
`;
