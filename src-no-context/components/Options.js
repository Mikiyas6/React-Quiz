function Options({ question, dispatch, answer }) {
  return (
    <div className="options">
      {question.options.map((option, idx) => (
        <button
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: idx,
            })
          }
          key={option.id}
          disabled={answer != null ? true : false}
          className={`btn btn-option ${idx === answer ? "answer" : ""} ${
            answer != null
              ? idx === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
