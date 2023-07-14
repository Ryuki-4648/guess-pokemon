interface ResultAreaProps {
  result: string;
  answer: string;
}

export const ResultArea: React.FC<ResultAreaProps> = ({ result, answer }) => {
  return (
    <div className="flex w-full flex-wrap items-center md:pl-8 lg:w-auto">
      <p className="mr-2 w-8 text-4xl font-bold md:mr-4 md:w-12 md:text-6xl lg:mr-16">
        {result}
      </p>
      <p className="mr-2 block text-base font-bold md:text-2xl">こたえは</p>
      <p className="text-2xl font-bold text-red-700 md:text-4xl">{answer}</p>
    </div>
  );
};
