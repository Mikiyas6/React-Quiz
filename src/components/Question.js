import Options from "./Options";
function Question({ questions, index, dispatch, answer }) {
  const question = questions[index];
  return (
    <div className="">
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
      <button onClick={() => dispatch({ type: "prev" })} className="btn">
        back
      </button>
      <button
        onClick={() => dispatch({ type: "next", payload: questions.length })}
        className="btn"
      >
        next
      </button>
    </div>
  );
}

export default Question;
