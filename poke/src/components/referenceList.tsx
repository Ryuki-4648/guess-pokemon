export const ReferenceList = () => {
  return (
    <>
      <p className="mb-3 pl-4 text-2xl font-bold duration-300 md:mb-4 md:text-3xl">
        参考文献
      </p>
      <a
        href="https://zukan.pokemon.co.jp/"
        target="_blank"
        rel="noreferrer"
        className="mb-2 block pl-4 text-xl font-bold text-red-700 underline hover:text-blue-800 sm:text-3xl md:inline-block md:text-2xl"
      >
        ポケモンずかん
      </a>
      <a
        href="https://wiki.xn--rckteqa2e.com/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8"
        target="_blank"
        rel="noreferrer"
        className="block pl-4 text-xl font-bold text-red-700 underline hover:text-blue-800 sm:text-3xl md:inline-block md:pl-8 md:text-2xl"
      >
        ポケモンWiki
      </a>
    </>
  );
};
