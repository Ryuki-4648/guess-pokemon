import "./App.css";
import { PokeQuiz } from "./hooks/pokeQuizHooks";

function App() {
  const {
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
  } = PokeQuiz();
  return (
    <div className="App relative overflow-y-hidden">
      {modalShow && (
        <div className="hoge l-modal absolute left-1/2 top-1/2 z-10 w-5/6 rounded-md border-4 border-stone-900 p-4 sm:h-80 md:px-8 md:py-12 lg:h-96 lg:w-1/3">
          <header className="l-header flex flex-wrap items-center">
            <div className="mb-6 flex w-full items-center justify-center">
              <img
                src="/favicon.png"
                className="App-logo block w-20 px-2 text-center"
                alt="logo"
              />
              <img
                src="/logo01.png"
                className="App-logo block w-24 px-2 text-center"
                alt="logo"
              />
            </div>
            <p className="w-full text-center text-base font-bold leading-8 tracking-wider md:text-xl">
              ポケモンずかんの文章から、
              <br />
              なんのポケモンか当ててください。
              <br />
              <br />
              こたえはカタカナで入力し、
              <br />
              数字があれば
              <br />
              半角にしてください。
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
          <p className="mb-16 text-5xl font-extrabold leading-relaxed sm:text-7xl md:mb-20 md:text-9xl md:leading-relaxed">
            {randomZukan.question}
          </p>
          <p className="mb-14 text-4xl font-extrabold sm:mb-28 md:mb-52 md:text-6xl">
            『{randomZukan.game}』より
          </p>
          <p className="mb-3 pl-4 text-3xl font-bold md:mb-4">参考文献</p>
          <a
            href="https://zukan.pokemon.co.jp/"
            target="_blank"
            rel="noreferrer"
            className="mb-2 block pl-4 text-2xl font-bold text-red-700 underline hover:text-blue-800 sm:text-3xl md:inline-block"
          >
            ポケモンずかん
          </a>
          <a
            href="https://wiki.xn--rckteqa2e.com/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8"
            target="_blank"
            rel="noreferrer"
            className="block pl-4 text-2xl font-bold text-red-700 underline hover:text-blue-800 sm:text-3xl md:inline-block md:pl-8"
          >
            ポケモンWiki
          </a>
        </div>
      </section>
      <section className="l-answer relative flex flex-wrap items-center border-t border-gray-900 px-4 lg:flex-nowrap lg:px-0 lg:pl-8">
        <div className="flex flex-wrap items-center lg:flex-nowrap">
          <div className="mb-2 flex flex-wrap items-center border-none pt-4 md:mb-0 md:h-24 md:pt-0 lg:flex-nowrap lg:border-r lg:border-gray-900 lg:pr-4">
            <input
              type="text"
              placeholder="ポケモンの名前"
              className="mb-3 h-12 w-full cursor-pointer p-2 text-xl md:mb-0 md:h-16 md:w-72 md:text-2xl"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <p className="mr-3 text-2xl font-bold md:mx-6 md:text-4xl">に</p>
            <button
              className="h-12 w-48 rounded-full bg-red-700 text-xl font-bold text-white hover:bg-white hover:text-red-700 md:mt-0 md:h-16 md:w-72 md:text-3xl lg:mt-4"
              onClick={onClickSubmitButton}
            >
              きめた！
            </button>
          </div>
          <div className="flex flex-wrap items-center md:pl-8">
            <p className="mr-4 w-12 text-4xl font-bold md:mr-16 md:text-6xl">
              {result}
            </p>
            <p className="mr-2 block text-base font-bold md:text-2xl">
              こたえは
            </p>
            <p className="text-2xl font-bold text-red-700 md:text-4xl">
              {answer}
            </p>
          </div>
        </div>
      </section>
      <p
        className="absolute bottom-3 left-3 cursor-pointer text-base font-bold text-blue-800 hover:underline md:left-auto md:right-8 md:text-xl"
        onClick={onClickNextQuiz}
      >
        次のクイズに進む
      </p>
    </div>
  );
}

export default App;
