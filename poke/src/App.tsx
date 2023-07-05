import React, { useState } from "react";
import logo from "./logo01.png";
import "./App.css";
import zukanList from "./zukanList.json";

function App() {
  const [randomZukan, setRandomZukan] = useState(
    zukanList[Math.floor(Math.random() * zukanList.length)]
  );
  //console.log(randomZukan.answer);
  const onClickNextQuiz = () => {
    setRandomZukan(zukanList[Math.floor(Math.random() * zukanList.length)]);
  };
  const onClickSubmitButton = () => {
    console.log("submit");
  };

  const [answer, setAnswer] = useState("");
  const [inputText, setInputText] = useState("");

  return (
    <div className="App overflow-y-hidden">
      <header className="l-header flex items-center border-b border-gray-900">
        <img
          src={logo}
          className="App-logo mr-2 w-24 border-r border-gray-900 px-2"
          alt="logo"
        />
        <p className="text-lg font-bold tracking-wider">
          ポケモンずかんの文章から、なんのポケモンか当ててください。
        </p>
      </header>
      <section className="l-question relative overflow-y-scroll pb-12">
        <div className="">
          <p className="mb-20 text-9xl font-extrabold leading-relaxed">
            {randomZukan.question}
          </p>
          <p className="mb-52 text-6xl font-extrabold">
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
          className="fixed bottom-4 right-8 cursor-pointer text-xl text-blue-800"
          onClick={onClickNextQuiz}
        >
          次のクイズに進む
        </p>
      </section>
      <section className="l-answer flex items-center border-t border-gray-900 pl-8">
        <div className="flex items-center">
          <div className="flex h-24 items-center border-r border-gray-900 pr-4">
            <input
              type="text"
              placeholder="ポケモンの名前"
              className="h-16 w-72 cursor-pointer p-2 text-2xl"
              value={inputText}
            />
            <p className="mx-6 text-4xl font-bold">に</p>
            <button
              className="h-16 w-72 rounded-full bg-red-700 text-3xl font-bold text-white"
              onClick={onClickSubmitButton}
            >
              きめた！
            </button>
          </div>
          <div className="flex flex-wrap items-center pl-8">
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
