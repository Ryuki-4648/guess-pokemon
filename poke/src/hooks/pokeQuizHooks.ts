import { useState } from "react";
import zukanList from "../zukanList.json";

export const PokeQuiz = () => {
  const color01 = "#e3ddd8";
  const color02 = "#B91C1C";

  const [randomZukan, setRandomZukan] = useState(
    zukanList[Math.floor(Math.random() * zukanList.length)]
  );

  const onClickNextQuiz = () => {
    setRandomZukan(zukanList[Math.floor(Math.random() * zukanList.length)]);
    setInputText("");
    setResult("");
    setModalShow(false);
    setAnswer("");
  };

  const onClickSubmitButton = () => {
    setAnswer(randomZukan.answer);
    if (inputText === randomZukan.answer) {
      setResult("◯");
    } else {
      setResult("×");
    }
  };

  const onClickModalClose = () => {
    setModalShow(false);
  };
  const [modalShow, setModalShow] = useState(true);

  const [isModalButtonHover, setIsModalButtonHover] = useState(false);
  const onHoverModalButton = () => {
    setIsModalButtonHover(true);
  };
  const onLeaveModalButton = () => {
    setIsModalButtonHover(false);
  };
  const modalButtonStyle = {
    color: isModalButtonHover ? color02 : "inherit",
  };

  const [answer, setAnswer] = useState("");
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  return {
    randomZukan,
    onClickNextQuiz,
    onClickSubmitButton,
    onClickModalClose,
    modalShow,
    modalButtonStyle,
    onHoverModalButton,
    onLeaveModalButton,
    answer,
    inputText,
    setInputText,
    result,
  };
};
