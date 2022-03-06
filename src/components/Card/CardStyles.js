import styled from "styled-components";

// Styled Component
export const CardStyle = styled.div`
  background: ${(props) => props.theme.color.neutral.darkGrayishBlue};
  font-family: ${(props) => props.theme.font.fontFamily};
  font-weight: ${(props) => props.theme.font.fontWeight};
  position: relative;
  display: grid;
  text-align: center;
  padding: 2em;
  max-width: 520px;
  border-radius: 10px;
`;

export const CardTitle = styled.p`
  color: ${(props) => props.theme.color.primary.neonGreen};
  letter-spacing: 3px;
  font-size: 13px;
`;

export const CardContent = styled.p`
  color: ${(props) => props.theme.color.primary.lightCyan};
  font-size: ${(props) => props.theme.font.fontSizeQuote - 6}px;

  @media (min-width: 376px) {
    font-size: ${(props) => props.theme.font.fontSizeQuote}px;
  }
`;

export const CardDice = styled.button`
  background: ${(props) => props.theme.color.primary.neonGreen};
  bottom: -30px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-content: center;
  place-self: center;
  position: absolute;
  width: 60px;
  height: 60px;
  transition: box-shadow linear .3s;

  @media (min-width: 1100px) {
    &:hover {
      box-shadow: 2px 2px 30px 30px ${(props) => props.theme.color.primary.neonGreenBlur};
    }
  }
`;
