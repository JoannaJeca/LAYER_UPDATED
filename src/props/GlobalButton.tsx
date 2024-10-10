import styled from "styled-components";

interface iButton {
  wd: string;
  bg: string;
  bd: string;
  text: string;
  ml?: string;
}

const GlobalButton: React.FC<iButton> = ({ wd, bg, ml, bd, text }) => {
  return (
    <div>
      <Button bg={bg} wd={wd} bd={bd} ml={ml}>
        {text}
      </Button>
    </div>
  );
};
export default GlobalButton;

const Button = styled.button<{
  bg: string;
  wd: string;
  bd: string;
  ml?: string;
}>`
  width: ${({ wd }) => wd};
  background-color: ${({ bg }) => bg};
  border: ${({ bd }) => bd};
  margin-left: ${({ ml }) => ml};
  height: 50px;
  border-radius: 100px;
  cursor: pointer;
  color: #fff;
  font-weight: semibold;
  transition: all 350ms;

  &:hover {
    background-color: white;
    color: black;
    transition: all 350ms;
  }
  cursor: pointer;
`;
