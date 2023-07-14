import { useState } from "react";
import zukanList from "../zukanList.json";

export const PokeQuiz = () => {
  const color01 = "#e3ddd8";
  const color02 = "#B91C1C";

  const [randomZukan, setRandomZukan] = useState(
    zukanList[Math.floor(Math.random() * zukanList.length)]
  );

  const [answer, setAnswer] = useState("");
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");
  const [overlay, setOverlay] = useState(true);
  const [modalShow, setModalShow] = useState(true);
  const [isModalButtonHover, setIsModalButtonHover] = useState(false);

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

  const onClickOverlay = () => {
    setOverlay(false);
    setModalShow(false);
  };

  const onClickModalClose = () => {
    setModalShow(false);
    setOverlay(false);
  };

  const onHoverModalButton = () => {
    setIsModalButtonHover(true);
  };
  const onLeaveModalButton = () => {
    setIsModalButtonHover(false);
  };
  const modalButtonStyle = {
    color: isModalButtonHover ? color02 : "inherit",
  };

  return {
    randomZukan,
    onClickNextQuiz,
    onClickSubmitButton,
    onClickModalClose,
    onClickOverlay,
    modalShow,
    modalButtonStyle,
    onHoverModalButton,
    onLeaveModalButton,
    answer,
    inputText,
    setInputText,
    result,
    overlay,
  };
};
