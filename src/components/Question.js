import Options from "./Options";
function Question({ questions, index, dispatch, answer }) {
  const question = questions[index];
  return (
    <div className="">
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
