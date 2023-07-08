import React, { useState } from "react";
import logo from "./logo01.png";
import "./App.css";
import zukanList from "./zukanList.json";

function App() {
  const color01 = "#e3ddd8";
  const color02 = "#B91C1C";

  const [randomZukan, setRandomZukan] = useState(
    zukanList[Math.floor(Math.random() * zukanList.length)]
  );
  //console.log(randomZukan.answer);

  const onClickNextQuiz = () => {
    setRandomZukan(zukanList[Math.floor(Math.random() * zukanList.length)]);
    setInputText("");
    setResult("");
    setModalShow(false);
  };

  const onClickSubmitButton = () => {
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

  return (
    <div className="App relative overflow-y-hidden">
      {modalShow && (
        <div className="hoge l-modal absolute left-1/2 top-1/2 z-10 h-80 w-1/3 rounded-md border border-stone-900 p-8">
          <header className="l-header flex flex-wrap items-center">
            <img
              src={logo}
              className="App-logo mx-auto mb-6 block w-28 px-2 text-center"
              alt="logo"
            />
            <p className="w-full text-center text-xl font-bold leading-8 tracking-wider">
              ポケモンずかんの文章から、
              <br />
              なんのポケモンか当ててください。
              <br />
              <br />
              こたえはカタカナで入力し、
              <br />
              数字は半角にしてください。
            </p>
          </header>
          <button
            className="button absolute right-4 top-4 text-4xl font-bold"
            onClick={onClickModalClose}
            style={modalButtonStyle}
            onMouseEnter={onHoverModalButton}
            onMouseLeave={onLeaveModalButton}
          >
            ×
          </button>
        </div>
      )}
      <section className="l-question relative overflow-y-scroll pb-12">
        <div className="">
          <p className="mb-16 text-7xl font-extrabold leading-relaxed md:mb-20 md:text-9xl md:leading-relaxed">
            {randomZukan.question}
          </p>
          <p className="mb-28 text-4xl font-extrabold md:mb-52 md:text-6xl">
            『{randomZukan.game}』より
          </p>
          <p className="mb-4 pl-4 text-3xl font-bold">参考文献</p>
          <a
            href="https://zukan.pokemon.co.jp/"
            target="_blank"
            rel="noreferrer"
            className="mb-2 pl-4 text-3xl font-bold text-red-700 underline"
          >
            ポケモンずかん
          </a>
          <a
            href="https://wiki.xn--rckteqa2e.com/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8"
            target="_blank"
            rel="noreferrer"
            className="pl-8 text-3xl font-bold text-red-700 underline"
          >
            ポケモンWiki
          </a>
        </div>
        <p
          className="fixed bottom-9 right-8 cursor-pointer text-xl font-bold text-blue-800"
          onClick={onClickNextQuiz}
        >
          次のクイズに進む
        </p>
      </section>
      <section className="l-answer flex items-center border-t border-gray-900 md:pl-8">
        <div className="flex flex-wrap items-center md:flex-nowrap">
          <div className="flex flex-wrap items-center border-r border-gray-900 pt-4 md:h-24 md:flex-nowrap md:pr-4 md:pt-0">
            <input
              type="text"
              placeholder="ポケモンの名前"
              className="w-72 cursor-pointer p-2 text-2xl md:h-16"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <p className="mx-6 text-4xl font-bold">に</p>
            <button
              className="mt-4 h-16 w-72 rounded-full bg-red-700 text-3xl font-bold text-white md:mt-0"
              onClick={onClickSubmitButton}
            >
              きめた！
            </button>
          </div>
          <div className="flex flex-wrap items-center pl-8">
            <p className="mr-16 w-4 text-6xl font-bold">{result}</p>
            <p className="mr-2 block text-2xl font-bold">こたえは</p>
            <p className="text-4xl font-bold text-red-700">
              {randomZukan.answer}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
