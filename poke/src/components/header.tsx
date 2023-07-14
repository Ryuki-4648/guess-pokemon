export const Header = () => {
  return (
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
  );
};
