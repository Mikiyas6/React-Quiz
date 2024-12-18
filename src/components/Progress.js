import { useQuiz } from "../context/QuizContext";

function Progress() {
  const { index, numQuestions, answer, points, totalPoints } = useQuiz();
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={answer ? index + 1 : index}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
}
export default Progress;
