import "./App.css";
import { Header } from "./components/header";
import { NextButton } from "./components/nextButton";
import { ReferenceList } from "./components/referenceList";
import { ResultArea } from "./components/resultArea";
import { PokeQuiz } from "./hooks/pokeQuizHooks";

function App() {
  const {
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
  } = PokeQuiz();
  return (
    <div className="App relative h-screen overflow-y-hidden bg-primary">
      {overlay && (
        <div
          className="absolute left-0 top-0 z-10 h-full w-full cursor-pointer bg-black opacity-60"
          onClick={onClickOverlay}
        ></div>
      )}
      {modalShow && (
        <div className="absolute left-1/2 top-1/2 z-10 w-5/6 -translate-x-1/2 -translate-y-1/2 rounded-md border-4 border-stone-900 bg-primary p-4 sm:h-80 md:px-8 md:py-12 lg:h-96 lg:w-1/3">
          <Header />
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
          <p className="mb-14 text-4xl font-extrabold leading-relaxed duration-300 sm:mb-28 md:mb-52 md:text-6xl md:leading-relaxed">
            『{randomZukan.game}』より
          </p>
          <ReferenceList />
        </div>
      </section>
      <section className="l-answer relative flex min-h-[96px] flex-wrap items-center border-t border-gray-900 px-4 lg:flex-nowrap lg:px-0 lg:pl-8">
        <div className="flex flex-wrap items-center lg:flex-nowrap">
          <div className="mb-2 flex flex-wrap items-center border-none pt-3 md:mb-0 md:h-24 md:pt-0 lg:flex-nowrap lg:border-r lg:border-gray-900 lg:pr-4">
            <input
              type="text"
              placeholder="ポケモンの名前"
              className="mb-3 h-10 w-full cursor-pointer p-2 text-xl md:mb-0 md:h-16 md:w-72 md:text-2xl"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <p className="mr-3 text-2xl font-bold md:mx-6 md:text-4xl">に</p>
            <button
              className="h-10 w-48 rounded-full bg-red-700 text-xl font-bold text-white duration-300 hover:bg-white hover:text-red-700 md:h-16 md:w-72 md:text-3xl"
              onClick={onClickSubmitButton}
            >
              きめた！
            </button>
          </div>
          <ResultArea result={result} answer={answer} />
        </div>
      </section>
      <NextButton onClickNextQuiz={onClickNextQuiz} />
    </div>
  );
}

export default App;
