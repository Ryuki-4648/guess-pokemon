import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App h-screen">
      <header className="App-header">
        <img src={logo} className="App-logo w-7" alt="logo" />
      </header>
      <div className="overflow-y-scroll">
        <p className="mb-10 text-8xl font-extrabold leading-relaxed">
          図鑑の説明がランダムで表示される。図鑑の説明がランダムで表示される。
        </p>
        <p className="text-5xl font-extrabold">「ゲームの名前」より</p>
      </div>
      <p>
        ポケモン図鑑の説明から、なんのポケモンか当ててください。カタカナで入力してください。数字がある場合は半角。
      </p>
      <p className="text-blue-800">次のクイズに進む</p>

      <div className="flex items-center">
        <input
          type="text"
          placeholder="ポケモンの名前"
          className="h-16 w-80 p-2 text-3xl"
        />
        <p className="mx-2 text-3xl font-bold">に</p>
        <button className="h-16 w-80 bg-red-700 text-3xl text-white">
          きめた！
        </button>
      </div>
    </div>
  );
}

export default App;
