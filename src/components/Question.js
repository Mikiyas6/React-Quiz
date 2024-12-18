import { useQuiz } from "../context/QuizContext";
import Options from "./Options";
function Question() {
  const { questions, index, dispatch, answer } = useQuiz();
  const question = questions[index];
  return (
    <div className="">
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
