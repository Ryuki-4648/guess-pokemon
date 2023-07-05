import React, { useState } from "react";
import logo from "./logo01.png";
import "./App.css";
import zukanList from "./zukanList.json";

function App() {
  const randomZukan = zukanList[Math.floor(Math.random() * zukanList.length)];
  //console.log(randomZukan.answer);
  const onClickNextQuiz = () => {
    console.log("next");
  };
  const onClickSubmitButton = () => {
    console.log("submit");
  };

  const [answer, setAnswer] = useState("");

  return (
    <div className="App overflow-y-hidden">
      <header className="App-header flex h-12 items-center border-b border-gray-900">
        <img
          src={logo}
          className="App-logo mr-2 w-24 border-r border-gray-900 px-2"
          alt="logo"
        />
        <p className="text-lg font-bold tracking-wider">
          ポケモンずかんの説明から、なんのポケモンか当ててください。
        </p>
      </header>
      <section className="relative">
        <div className="l-question overflow-y-scroll">
          <p className="mb-16 text-8xl font-extrabold leading-relaxed">
            {randomZukan.question}
          </p>
          <p className="mb-16 text-5xl font-extrabold">
            『{randomZukan.game}』より
          </p>
        </div>
        <p
          className="absolute bottom-4 right-8 cursor-pointer text-xl text-blue-800"
          onClick={onClickNextQuiz}
        >
          次のクイズに進む
        </p>
      </section>
      <section className="border-t border-gray-900">
        <div className="flex h-24 items-center justify-center">
          <input
            type="text"
            placeholder="ポケモンの名前"
            className="h-16 w-80 cursor-pointer p-2 text-3xl"
          />
          <p className="mx-6 text-4xl font-bold">に</p>
          <button
            className="h-16 w-80 bg-red-700 text-3xl font-bold text-white"
            onClick={onClickSubmitButton}
          >
            きめた！
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
