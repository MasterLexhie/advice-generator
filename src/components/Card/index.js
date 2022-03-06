import React, { useEffect, useState } from "react";
import { CardStyle, CardTitle, CardContent, CardDice } from "./CardStyles";
import patternDividerDesktop from "../../images/pattern-divider-desktop.svg";
import patternDividerMobile from "../../images/pattern-divider-desktop.svg";
import cardDice from "../../images/icon-dice.svg";

const Card = () => {
  const [advice, setAdvice] = useState(null);
  const api = "https://api.adviceslip.com/advice";

  const handleSubmit = () => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setAdvice(data));
  };

  useEffect(() => {
    if(!advice) {
      handleSubmit();
    }
  }, [advice]);

  return (
    <>
      <CardStyle>
        <CardTitle className="mb-10 mt-20">
          {" "}
          ADVICE {`#${advice?.slip.id ?? 0}`}
        </CardTitle>
        <CardContent className="mb-30 mt-10">{advice?.slip.advice ?? 'Loading...'}</CardContent>
        <div className="mb-40 mt-10">
          <picture>
            <source
              srcSet={patternDividerDesktop}
              media="(min-width: 376px)"
              className="width-full"
            />
            <img
              src={patternDividerMobile}
              alt="divider"
              className="width-full"
            />
          </picture>
        </div>
        <CardDice onClick={handleSubmit}>
          <img src={cardDice} alt="dice" />
        </CardDice>
      </CardStyle>
    </>
  );
};

export default Card;
