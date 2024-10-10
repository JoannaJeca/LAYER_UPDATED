import styled from "styled-components";
import { StringLiteralType } from "typescript";

interface iCards {
  icons: string;
  hd: string;
  txt: string;
  mrg: string;
}

const GlobalCards: React.FC<iCards> = ({ icons, hd, txt, mrg }) => {
  return (
    <div>
      <Wrapper mg={mrg}>
        <Icon>{icons}</Icon>
        <Wrap>
          <h2>{hd}</h2>
          <p>{txt}</p>
        </Wrap>
      </Wrapper>
    </div>
  );
};
export default GlobalCards;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  h2 {
    margin-bottom: 5px;
  }
  p {
    color: rgba(0, 0, 0, 0.7);
    margin-top: 0px;
  }
`;

const Icon = styled.div``;

const Wrapper = styled.div<{ mg: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  border-radius: 7px;

  box-shadow: 2px 1px 8px 4px darkgrey;
  margin-left: ${({ mg }) => mg};
  padding: 8px 10px;
`;
