interface NextButtonProps {
  onClickNextQuiz: () => void;
}

export const NextButton: React.FC<NextButtonProps> = ({ onClickNextQuiz }) => {
  return (
    <p
      className="absolute bottom-3 left-3 cursor-pointer text-base font-bold text-blue-800 hover:underline md:left-auto md:right-8 md:text-xl"
      onClick={onClickNextQuiz}
    >
      次のクイズに進む
    </p>
  );
};
